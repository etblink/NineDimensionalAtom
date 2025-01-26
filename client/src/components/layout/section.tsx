interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}
