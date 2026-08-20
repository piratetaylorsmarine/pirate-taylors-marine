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

      {/* Always visible — no hamburger/dropdown. Stacks and wraps on mobile; logo-left / nav-center / phone+CTA-right on desktop. */}
      <Container className="flex flex-col items-center gap-3 py-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-4 lg:py-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center leading-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={business.name}
            style={{ display: 'block', height: '76px', width: 'auto', background: 'white' }}
          />
        </Link>

        {/* Nav — one unbroken group, wraps on mobile, centred on desktop */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:gap-x-7">
          {navLinks.map((link) => {
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

        {/* Phone + CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-end">
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
    </header>
  );
}
