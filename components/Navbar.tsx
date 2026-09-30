"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Materials", href: "#materials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/60 bg-ivory/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="arch-sm flex h-9 w-7 items-end justify-center bg-charcoal pb-1">
            <span className="h-3 w-3 rounded-full bg-brass" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Makaan <span className="italic text-brass-deep">Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-warm transition-colors hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Book Consultation
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-sand p-2.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sand/60 bg-ivory/95 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-medium text-charcoal hover:bg-parchment"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory"
            >
              <MessageCircle className="h-4 w-4" />
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
