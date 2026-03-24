interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[13px] uppercase tracking-[0.2em] text-brand-muted ${className}`}
    >
      [ {children} ]
    </span>
  );
}
