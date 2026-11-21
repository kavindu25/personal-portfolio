const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// The technologies, set as filled chips so they read at a glance.
export function Stack({ items, delay }: { items: string[]; delay?: number }) {
  return (
    <ul aria-label="Technologies used" className="flex flex-wrap gap-2" data-reveal style={delay ? d(delay) : undefined}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
