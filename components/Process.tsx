import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Consult & Site Study",
    time: "Week 1",
    desc: "We visit your space, listen to how you live, measure everything and note light, ventilation and structure.",
  },
  {
    n: "02",
    title: "3D Design & BOQ",
    time: "Weeks 2–3",
    desc: "Photoreal 3D views of every room, material palettes and a line-by-line BOQ — no surprise costs, ever.",
  },
  {
    n: "03",
    title: "Execution",
    time: "Weeks 4–10",
    desc: "Our own civil, carpentry and finishing teams build it. You get weekly photo and video updates on WhatsApp.",
  },
  {
    n: "04",
    title: "Styling & Handover",
    time: "Week 11",
    desc: "Furniture placed, art hung, plants in. Deep-cleaned, snag-checked and handed over with a care manual.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-14 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
          How it works
        </p>
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          From first call to final <em className="text-brass-deep">key handover</em>
        </h2>
      </Reveal>

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[27px] top-2 hidden h-[calc(100%-16px)] w-px bg-sand md:block"
        />
        <div className="space-y-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brass/50 bg-ivory font-display text-lg font-semibold text-brass-deep shadow-sm">
                  {s.n}
                </div>
                <div className="flex-1 rounded-[24px] border border-sand/70 bg-ivory p-7 transition-shadow hover:shadow-[0_20px_45px_-20px_rgba(125,95,49,0.35)] md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                    <span className="rounded-full bg-parchment px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brass-deep">
                      {s.time}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl leading-relaxed text-stone-warm">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
