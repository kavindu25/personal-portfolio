export function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-meta" aria-label="Technologies used">
      {stack.map((tech) => (
        <li key={tech} className="rounded-sm border border-line bg-surface px-2.5 py-1.5 leading-none text-ink-soft">
          {tech}
        </li>
      ))}
    </ul>
  );
}
