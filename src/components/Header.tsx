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

// "Get a Quote" is dropped from the nav group since the CTA button on the
// right already covers it.
const navLinks = links.filter((l) => l.href !== "/contact");

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brass-400/50 bg-white" style={{ WebkitTransform: 'translateZ(0)' }}>

      {/* Always visible, single row at every size. Nav scrolls horizontally
          if it doesn't fit rather than wrapping to a second line. */}
      <Container className="flex items-center gap-3 py-2 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:py-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center leading-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={business.name}
            className="block h-10 w-auto bg-white lg:h-[76px]"
          />
        </Link>

        {/* Nav — one unbroken group; scrolls on mobile, centred on desktop */}
        <nav className="scrollbar-none flex min-w-0 flex-1 items-center gap-3 overflow-x-auto whitespace-nowrap lg:flex-none lg:justify-center lg:gap-7 lg:overflow-visible">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-wide uppercase transition-colors lg:text-sm ${
                  active ? "text-crimson-500" : "text-navy-800 hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone + CTA */}
        <div className="flex shrink-0 items-center gap-2 lg:gap-4 lg:justify-end">
          <a
            href={`tel:${business.phoneTel}`}
            aria-label={business.phoneDisplay}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-crimson-500"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            <span className="hidden lg:inline">{business.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-crimson-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-crimson-600 lg:px-5 lg:py-2 lg:text-sm"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </header>
  );
}
