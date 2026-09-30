const ITEMS = [
  "Full Homes",
  "3D Design",
  "Turnkey Projects",
  "Offices",
  "Space Planning",
  "Styling & Decor",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="mt-16 overflow-hidden border-y border-brass-deep/30 bg-charcoal py-4 sm:mt-20">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg italic text-ivory/90">
              {item}
            </span>
            <span className="text-brass">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
