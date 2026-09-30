import Reveal from "./Reveal";

const MATERIALS = [
  { name: "Travertine", note: "Honoured stone", swatch: "linear-gradient(135deg,#e8dcc4 0%,#d9c9a8 45%,#c9b68f 100%)" },
  { name: "Smoked Oak", note: "Flooring & panels", swatch: "linear-gradient(135deg,#8a6b4a 0%,#6e5236 55%,#54402a 100%)" },
  { name: "Brushed Brass", note: "Fixtures & trims", swatch: "linear-gradient(135deg,#e3c07f 0%,#b98f4e 50%,#8a683a 100%)" },
  { name: "Belgian Linen", note: "Upholstery", swatch: "linear-gradient(135deg,#f1e9d8 0%,#e2d5bd 60%,#d3c3a6 100%)" },
  { name: "Terrazzo", note: "Counters & baths", swatch: "radial-gradient(circle at 30% 30%,#efe6d2 0 8%,transparent 9%),radial-gradient(circle at 70% 60%,#c9b894 0 6%,transparent 7%),linear-gradient(135deg,#ddd0b6,#c4b28e)" },
  { name: "Walnut", note: "Joinery", swatch: "linear-gradient(135deg,#5d4430 0%,#453222 55%,#33261a 100%)" },
];

export default function Materials() {
  return (
    <section id="materials" className="scroll-mt-24 bg-charcoal py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-soft">
              Material Library
            </p>
            <h2 className="max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Honest materials, <em className="text-brass-soft">beautifully</em> combined
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            We sample everything in your actual light before committing — stone,
            timber, metal and fabric, curated per project.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {MATERIALS.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div className="group text-center">
                <div
                  className="arch-sm mx-auto aspect-[3/4] w-full border border-ivory/15 transition-transform duration-500 group-hover:-translate-y-1.5"
                  style={{ background: m.swatch }}
                  role="img"
                  aria-label={`${m.name} material swatch`}
                />
                <p className="mt-3 font-display text-base font-medium">{m.name}</p>
                <p className="text-xs text-ivory/60">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
