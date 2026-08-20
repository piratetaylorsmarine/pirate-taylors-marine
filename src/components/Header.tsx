"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";
import { business } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Get a Quote" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teak-200 bg-white" style={{ WebkitTransform: 'translateZ(0)' }}>

      {/* Row 1 — logo centred, hamburger on mobile */}
      <Container className="flex items-center justify-between lg:justify-center" style={{ lineHeight: 0 }}>
        <Link
          href="/"
          className="flex items-center"
          onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={business.name}
            style={{ display: 'block', height: '112px', width: 'auto', background: 'white' }}
          />
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="text-navy-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

      {/* Row 2 — nav bar, desktop only */}
      <div className="hidden border-t border-teak-100 lg:block">
        <Container className="flex items-center justify-between py-2.5">
          <nav className="flex items-center gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                    active ? "text-crimson-500" : "text-navy-800 hover:text-crimson-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-crimson-500"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-sm bg-crimson-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-600"
            >
              Get a Quote
            </Link>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-teak-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-3 text-base font-medium uppercase tracking-wide ${
                  pathname === link.href
                    ? "text-crimson-500"
                    : "text-navy-800 hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-2 flex items-center gap-2 px-2 py-2 text-base font-semibold text-navy-800"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
