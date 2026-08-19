"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { WheelIcon, PhoneIcon, MenuIcon, CloseIcon } from "./icons";
import { business } from "@/lib/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800 bg-navy-950/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <WheelIcon className="h-9 w-9 text-brass-500" />
          <span className="font-display text-xl leading-tight text-cream-100 sm:text-2xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  active ? "text-brass-400" : "text-cream-200 hover:text-brass-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-2 text-sm font-semibold text-cream-100 hover:text-brass-400"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-brass-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-navy-950 transition-colors hover:bg-brass-400"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="text-cream-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-navy-800 bg-navy-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-2 py-3 text-base font-medium uppercase tracking-wide ${
                  pathname === link.href
                    ? "text-brass-400"
                    : "text-cream-200 hover:text-brass-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-2 flex items-center gap-2 px-2 py-2 text-base font-semibold text-cream-100"
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
