import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const QUOTES = [
  {
    text: "They turned our 10-marla grey structure into a home our guests photograph. The 3D designs matched the final rooms almost exactly.",
    name: "Ayesha & Daniyal",
    meta: "Full home · DHA Phase 6, Lahore",
  },
  {
    text: "Weekly video updates meant we never worried while living in another city. BOQ stayed locked — not a rupee over.",
    name: "Fatima Raza",
    meta: "Apartment · E-11, Islamabad",
  },
  {
    text: "Our clinic now feels calm instead of clinical. Patients comment on it daily. Finished two days early, too.",
    name: "Dr. Bilal Sheikh",
    meta: "Dental studio · Gulberg, Lahore",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-12 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
          Client words
        </p>
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          Loved by the people who <em className="text-brass-deep">live</em> in our work
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={i * 100} className="h-full">
            <figure className="flex h-full flex-col rounded-[24px] border border-sand/70 bg-parchment p-7">
              <Quote className="h-7 w-7 text-brass" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-charcoal/90">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-6 border-t border-sand/70 pt-4">
                <p className="font-display text-lg font-medium">{q.name}</p>
                <p className="text-sm text-stone-warm">{q.meta}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
