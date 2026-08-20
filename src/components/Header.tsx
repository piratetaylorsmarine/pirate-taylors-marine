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
  { href: "/contact", label: "Get a Quote" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teak-200 bg-white/95 backdrop-blur shadow-sm">
      <Container className="flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt={business.name} className="h-20 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-crimson-500"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-crimson-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-600"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="text-navy-800 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </Container>

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
