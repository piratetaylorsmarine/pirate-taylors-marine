"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { PhoneIcon } from "./icons";
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

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-brass-400/40 bg-navy-950 lg:border-brass-400/50 lg:bg-white"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >

      {/* Mobile — dark single row, nav-left/logo-center/phone-right (Woodcraft-style).
          Desktop (lg+) — restored white header: logo-left / nav-center / phone+CTA-right. */}
      <Container className="flex items-center gap-2 py-2 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-4 lg:py-3">

        {/* Nav */}
        <nav className="scrollbar-none order-2 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap lg:order-2 lg:flex-none lg:justify-center lg:gap-7 lg:overflow-visible">
          {links.map((link) => {
            const active = pathname === link.href;
            const isContact = link.href === "/contact";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] font-medium uppercase transition-colors lg:text-sm lg:tracking-wide ${isContact ? "lg:hidden" : ""} ${
                  active
                    ? "text-crimson-400 lg:text-crimson-500"
                    : "text-cream-200/90 hover:text-crimson-400 lg:text-navy-800 lg:hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="order-1 flex shrink-0 items-center justify-center leading-none lg:order-1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={business.name}
            className="block h-8 w-auto rounded-sm bg-white px-1.5 py-1 lg:h-[76px] lg:rounded-none lg:px-0 lg:py-0"
          />
        </Link>

        {/* Phone + CTA */}
        <div className="order-3 flex shrink-0 items-center justify-end gap-1.5 lg:order-3 lg:gap-4">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-1 text-[9px] font-semibold whitespace-nowrap text-cream-100 hover:text-crimson-400 lg:gap-2 lg:text-sm lg:text-navy-800 lg:hover:text-crimson-500"
          >
            <PhoneIcon className="h-3 w-3 shrink-0 lg:h-4 lg:w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="hidden rounded-sm bg-crimson-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-600 lg:inline-flex lg:items-center lg:justify-center"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </header>
  );
}
