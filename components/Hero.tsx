"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Clock3, Ruler, Star } from "lucide-react";
import Reveal from "./Reveal";

const ROOMS = [
  {
    src: "/room-living.webp",
    name: "The Sunlit Living Room",
    meta: "DHA Phase 6, Lahore · PKR 42L",
  },
  {
    src: "/room-kitchen.webp",
    name: "The Brass Kitchen",
    meta: "Gulberg Greens, Islamabad · PKR 28L",
  },
  {
    src: "/room-bedroom.webp",
    name: "The Linen Bedroom",
    meta: "E-11, Islamabad · PKR 19L",
  },
  {
    src: "/room-office.webp",
    name: "The Walnut Studio Office",
    meta: "Blue Area, Islamabad · PKR 24L",
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      videoRef.current
    ) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* faint watermark */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-semibold leading-none tracking-tight"
      >
        MAKAN
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sand bg-parchment/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brass-deep">
            Interior Design Studio — Lahore · Islamabad · Karachi
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.04] tracking-tight sm:text-7xl">
            Rooms that <em className="text-brass-deep">hold</em> you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-warm sm:text-lg">
            Makaan Studio designs warm, minimal homes and workplaces across
            Pakistan — from the first sketch and 3D design to execution and
            final styling.
          </p>
        </Reveal>

        {/* ── The Arch: cinematic walkthrough portal ── */}
        <Reveal delay={150} className="relative mx-auto mt-12 max-w-[430px]">
          <div className="arch bg-gradient-to-b from-brass-soft via-linen to-sand p-3 shadow-[0_30px_80px_-20px_rgba(125,95,49,0.45)]">
            <div className="arch relative aspect-[3/4] overflow-hidden bg-bark">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                aria-label="Cinematic walkthrough of a Makaan Studio living room"
              >
                <source src="/walkthrough.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ivory/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal backdrop-blur">
                Live walkthrough — DHA Villa
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="animate-drift absolute -left-3 top-20 z-10 sm:-left-10">
            <div className="flex items-center gap-2.5 rounded-2xl border border-sand bg-ivory/95 px-4 py-3 shadow-lg backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-parchment">
                <Ruler className="h-4 w-4 text-brass-deep" />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">120+</p>
                <p className="mt-1 text-xs text-stone-warm">projects delivered</p>
              </div>
            </div>
          </div>
          <div className="animate-drift-slow absolute -right-3 top-44 z-10 sm:-right-10">
            <div className="flex items-center gap-2.5 rounded-2xl border border-sand bg-ivory/95 px-4 py-3 shadow-lg backdrop-blur">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-parchment">
                <Star className="h-4 w-4 fill-brass text-brass" />
              </span>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">4.9 / 5</p>
                <p className="mt-1 text-xs text-stone-warm">80+ client reviews</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 left-1/2 z-10 -translate-x-1/2">
            <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-charcoal px-5 py-3 text-ivory shadow-xl">
              <Clock3 className="h-4 w-4 text-brass-soft" />
              <p className="text-xs font-semibold sm:text-sm">
                Typical budgets · PKR 8L – 2.5Cr
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={250}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-bold text-ivory shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brass-deep"
          >
            Book free consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-7 py-3.5 text-sm font-bold transition-colors hover:border-charcoal hover:bg-parchment"
          >
            See selected work
            <ChevronDown className="h-4 w-4" />
          </a>
        </Reveal>

        {/* ── Room strip ── */}
        <Reveal delay={150} className="mt-16 sm:mt-20">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ROOMS.map((room) => (
              <figure
                key={room.src}
                className="group w-[78vw] max-w-[340px] shrink-0 snap-center sm:w-[340px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={room.src}
                    alt={room.name}
                    fill
                    sizes="(max-width: 640px) 78vw, 340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between px-1">
                  <span className="font-display text-lg font-medium">
                    {room.name}
                  </span>
                </figcaption>
                <p className="px-1 text-sm text-stone-warm">{room.meta}</p>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
