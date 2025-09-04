export default function Pill({ text }) {
  return (
    <span className="px-3 py-1 bg-gray-800/20 border border-gray-600 rounded-full text-xs text-gray-800">
      {text}
    </span>
  );
}
