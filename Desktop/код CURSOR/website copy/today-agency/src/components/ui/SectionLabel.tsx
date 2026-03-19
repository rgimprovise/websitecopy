interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs uppercase tracking-[0.2em] text-brand-muted ${className}`}
    >
      [ {children} ]
    </span>
  );
}
