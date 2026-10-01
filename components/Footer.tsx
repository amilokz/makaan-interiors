import { MessageCircle, MapPin, Clock3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="arch-sm flex h-9 w-7 items-end justify-center bg-ivory pb-1">
                <span className="h-3 w-3 rounded-full bg-brass" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Makaan <span className="italic text-brass-soft">Studio</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">
              Warm minimal interiors across Pakistan — designed, built and
              styled by one accountable team.
            </p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-bold text-ivory transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brass-soft">
              Visit
            </p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-soft" />
                Studio 14, Main Boulevard, DHA Phase 6, Lahore
              </li>
              <li className="flex items-start gap-2.5">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brass-soft" />
                Mon – Sat · 10am – 7pm
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brass-soft">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-ivory/70">
              {[
                ["Work", "#work"],
                ["Services", "#services"],
                ["Process", "#process"],
                ["Materials", "#materials"],
                ["FAQ", "#faq"],
                ["Book visit", "#booking"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-ivory">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row">
          <p>© 2026 Makaan Studio. A fictional demo website. · Designed &amp; built by <a href="https://akclnt.com" className="text-ivory/70 underline-offset-4 hover:underline">AKCLNT</a></p>
          <p>Lahore · Islamabad · Karachi</p>
        </div>
      </div>
    </footer>
  );
}
