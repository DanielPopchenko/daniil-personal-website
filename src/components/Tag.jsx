export default function Tag({ children }) {
  return (
    <li className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-ink hover:text-ink sm:text-[11px]">
      {children}
    </li>
  );
}
