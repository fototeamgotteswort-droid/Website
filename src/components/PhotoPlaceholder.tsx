/** Farbflaeche anstelle eines noch fehlenden Fotos, mit sichtbarem [Platzhalter]. */
export default function PhotoPlaceholder({
  label,
  color,
  ratio,
  className,
}: {
  label: string;
  color: string;
  ratio: string;
  className?: string;
}) {
  return (
    <div
      className={`photo-ph${className ? ` ${className}` : ""}`}
      style={{ background: color, aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <span aria-hidden="true">[{label}]</span>
    </div>
  );
}
