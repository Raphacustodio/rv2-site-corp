interface Props {
  label: string;
  description: string;
  color: "green" | "purple";
}

export function SectionDivider({ label, description, color }: Props) {
  const accent = color === "green" ? "#16A34A" : "#7C3AED";
  const bg = color === "green" ? "#F0FDF4" : "#FAF5FF";
  const border = color === "green" ? "#DCFCE7" : "#EDE9FE";
  return (
    <div style={{ backgroundColor: bg, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}
      className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: accent }}>{label}</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{description}</h2>
      </div>
    </div>
  );
}
