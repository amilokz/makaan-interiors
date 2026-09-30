"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How much does a full home interior cost in Pakistan?",
    a: "For a warm-minimal finish with custom joinery, most of our full-home projects land between PKR 18 lakh and PKR 2.5 crore depending on size, materials and scope. After the first consultation we share a line-by-line BOQ so you see exactly where every rupee goes.",
  },
  {
    q: "Do you work outside Lahore?",
    a: "Yes — our core teams operate in Lahore, Islamabad/Rawalpindi and Karachi. For other cities we work with trusted local execution partners under our design supervision, with the same weekly reporting.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single room takes 2–4 weeks, a full apartment 8–12 weeks, and a turnkey villa 4–6 months. We commit to a week-wise schedule before execution starts — and our on-time record is 94%.",
  },
  {
    q: "Can I see 3D designs before committing to execution?",
    a: "Absolutely — that's our standard flow. You approve photoreal 3D views of every room plus the full BOQ before we break a single wall. The design fee (PKR 150–350 per sq ft) is adjusted against execution if you build with us.",
  },
  {
    q: "Do you use my existing furniture?",
    a: "Wherever it makes sense. During the site study we mark pieces worth keeping, and design around them — reupholstery and refinishing often save 10–15% of the furniture budget.",
  },
  {
    q: "What if something goes wrong after handover?",
    a: "Every project carries a 1-year workmanship warranty — carpentry, paint, plumbing and electrical fixes are on us. Just message us on WhatsApp and we'll schedule a visit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
          Questions
        </p>
        <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Everything you&apos;re <em className="text-brass-deep">wondering</em>
        </h2>
      </Reveal>

      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 50}>
              <div
                className={`overflow-hidden rounded-[20px] border transition-colors ${
                  isOpen ? "border-brass/60 bg-parchment" : "border-sand/70 bg-ivory"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-charcoal text-ivory" : "bg-parchment text-charcoal"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-stone-warm">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
