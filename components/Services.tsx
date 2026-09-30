import { Sofa, BedDouble, Briefcase, KeyRound, Check } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Sofa,
    name: "Full Home",
    price: "from PKR 18L",
    desc: "Complete design + execution for your entire house or apartment.",
    points: ["Space planning & layouts", "3D views of every room", "Civil, electric & plumbing", "Furniture & styling"],
  },
  {
    icon: BedDouble,
    name: "Single Room",
    price: "from PKR 4.5L",
    desc: "One room, fully transformed — bedroom, lounge, kitchen or bath.",
    points: ["Concept & mood boards", "Custom furniture design", "Lighting & finishes", "2-week express option"],
  },
  {
    icon: Briefcase,
    name: "Office & Commercial",
    price: "from PKR 12L",
    desc: "Workplaces, retail and clinics that feel calm and work hard.",
    points: ["Workplace strategy", "Acoustic & lighting design", "Brand-aligned styling", "Phased execution"],
  },
  {
    icon: KeyRound,
    name: "Turnkey Build",
    price: "custom quote",
    desc: "Hand us the keys to a grey structure — get back a finished home.",
    points: ["Single contract, one team", "Weekly photo updates", "BOQ-locked pricing", "Deep-clean handover"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
            Services
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
            What we can <em className="text-brass-deep">design</em> for you
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-[24px] border border-sand/70 bg-ivory p-7 transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgba(125,95,49,0.35)]">
                <span className="arch-sm flex h-14 w-11 items-end justify-center bg-charcoal pb-2">
                  <s.icon className="h-5 w-5 text-brass-soft" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-medium">{s.name}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brass-deep">
                  {s.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-warm">{s.desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-sand/70 pt-5">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-deep" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
