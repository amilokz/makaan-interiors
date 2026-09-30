import Image from "next/image";
import { MapPin, Ruler, Wallet } from "lucide-react";
import Reveal from "./Reveal";

const FEATURED = {
  src: "/room-living.webp",
  title: "DHA Phase 6 Villa, Lahore",
  scope: "4,500 sq ft · Full home design + execution",
  budget: "PKR 1.8 Cr",
  tags: ["Warm minimal", "Oak & brass", "Custom joinery"],
};

const PROJECTS = [
  {
    src: "/room-kitchen.webp",
    title: "Gulberg Apartment Kitchen",
    scope: "320 sq ft · Kitchen + dining",
    budget: "PKR 28L",
  },
  {
    src: "/room-bedroom.webp",
    title: "E-11 Master Suite",
    scope: "3 rooms · Bedroom + bath + wardrobe",
    budget: "PKR 19L",
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
            Selected Work
          </p>
          <h2 className="max-w-xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Homes we&apos;ve <em className="text-brass-deep">shaped</em> lately
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-stone-warm">
          Every project starts with how you live — then we draw, build and
          style around it. A few recent favourites:
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="lg:row-span-2">
          <article className="group relative h-full min-h-[420px] overflow-hidden rounded-[28px] lg:min-h-[560px]">
            <Image
              src={FEATURED.src}
              alt={FEATURED.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="mb-3 flex flex-wrap gap-2">
                {FEATURED.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-ivory/15 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-medium text-ivory sm:text-4xl">
                {FEATURED.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/85">
                <span className="inline-flex items-center gap-2">
                  <Ruler className="h-4 w-4" /> {FEATURED.scope}
                </span>
                <span className="inline-flex items-center gap-2 font-bold text-brass-soft">
                  <Wallet className="h-4 w-4" /> {FEATURED.budget}
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {PROJECTS.map((p, i) => (
          <Reveal key={p.src} delay={i * 120}>
            <article className="group grid overflow-hidden rounded-[28px] border border-sand/70 bg-parchment sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[240px]">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-7">
                <h3 className="font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-stone-warm">
                  <MapPin className="h-4 w-4" /> {p.scope}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-brass-deep">
                  <Wallet className="h-5 w-5" /> {p.budget}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
