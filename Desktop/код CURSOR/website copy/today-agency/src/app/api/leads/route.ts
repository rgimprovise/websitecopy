import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");
const NOTIFY_EMAILS = ["rgimprovise@gmail.com", "RLS.TEAM@yandex.ru"];

interface Lead {
  id: number;
  name: string;
  phone: string;
  niche: string;
  createdAt: string;
}

async function appendLead(lead: Lead): Promise<void> {
  let leads: Lead[] = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    leads = JSON.parse(raw);
  } catch {
    // file doesn't exist yet — start fresh
  }
  leads.push(lead);
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; niche?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const niche = body.niche?.trim() ?? "";

  if (!name || !phone) {
    return NextResponse.json(
      { error: "name and phone are required" },
      { status: 400 }
    );
  }

  const lead: Lead = {
    id: Date.now(),
    name,
    phone,
    niche,
    createdAt: new Date().toISOString(),
  };

  await appendLead(lead);

  // Send email notification (non-blocking on failure)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const dateStr = new Date(lead.createdAt).toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
    });

    const html = `
      <div style="font-family:sans-serif;max-width:480px">
        <h2 style="color:#FF150E;margin-bottom:16px">Новая заявка — ALARCEV</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:40%">Имя</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Телефон</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${lead.phone}</td>
          </tr>
          ${
            lead.niche
              ? `<tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Ниша</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${lead.niche}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:8px 12px;background:#f5f5f5;font-weight:600">Дата</td>
            <td style="padding:8px 12px">${dateStr}</td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: NOTIFY_EMAILS.join(", "),
      subject: `Новая заявка с сайта: ${lead.name}`,
      html,
    });
  } catch (err) {
    console.error("[leads] email send failed:", err);
    // Lead already saved — don't fail the request
  }

  return NextResponse.json({ ok: true });
}
