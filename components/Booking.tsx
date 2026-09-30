"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, CalendarCheck } from "lucide-react";
import Reveal from "./Reveal";

const PROJECT_TYPES = ["Full home", "Single room", "Office / commercial", "Turnkey build", "Just exploring"];
const CITIES = ["Lahore", "Islamabad", "Rawalpindi", "Karachi", "Other"];
const BUDGETS = ["Under PKR 10L", "PKR 10–25L", "PKR 25–60L", "PKR 60L – 1.5Cr", "Above PKR 1.5Cr"];

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [city, setCity] = useState(CITIES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [notes, setNotes] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const raw = [
      "Assalam-o-Alaikum! I'd like a free design consultation.",
      "",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Project: ${type}`,
      `City: ${city}`,
      `Budget: ${budget}`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(raw)}`, "_blank");
  };

  const inputCls =
    "w-full rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-warm/60 focus:border-brass";

  return (
    <section id="booking" className="scroll-mt-24 bg-parchment py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brass-deep">
              Free consultation
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Let&apos;s talk about your <em className="text-brass-deep">space</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-stone-warm">
              A 30-minute call or site visit — we&apos;ll understand your space,
              your taste and your budget, and tell you honestly what&apos;s
              possible. No pushy sales, ever.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Free site visit within Lahore, Islamabad & Karachi",
                "Rough budget range shared on the first call",
                "3D design proposal within 7 days of booking",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal">
                    <CalendarCheck className="h-4 w-4 text-brass-soft" />
                  </span>
                  <span className="pt-1.5">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="rounded-[28px] border border-sand/70 bg-ivory p-7 shadow-[0_30px_60px_-25px_rgba(125,95,49,0.4)] sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    Your name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Khan"
                    className={inputCls}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    Phone / WhatsApp
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="03xx xxxxxxx"
                    className={inputCls}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    Project type
                  </label>
                  <select value={type} onChange={(e) => setType(e.target.value)} className={inputCls}>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    City
                  </label>
                  <select value={city} onChange={(e) => setCity(e.target.value)} className={inputCls}>
                    {CITIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    Budget range
                  </label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)} className={inputCls}>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-warm">
                    Anything we should know? <span className="font-medium normal-case">(optional)</span>
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Plot size, timeline, style you love…"
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-7 py-4 text-sm font-bold text-ivory shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brass-deep"
              >
                <MessageCircle className="h-5 w-5" />
                Send via WhatsApp
              </button>
              <p className="mt-4 text-center text-xs text-stone-warm">
                Opens WhatsApp with your details pre-filled. We reply within a few hours.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
