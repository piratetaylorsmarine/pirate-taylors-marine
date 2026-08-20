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
    <header className="sticky top-0 z-50 border-b-2 border-brass-400/40 bg-navy-950" style={{ WebkitTransform: 'translateZ(0)' }}>

      {/* Dark single-row bar — nav left, logo centred, phone right (Woodcraft-style layout) */}
      <Container className="flex items-center gap-2 py-2 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4 lg:py-3">

        {/* Nav — left, scrolls only if it truly can't fit */}
        <nav className="scrollbar-none flex min-w-0 flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap lg:flex-none lg:gap-6 lg:overflow-visible">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] font-medium uppercase transition-colors lg:text-sm lg:tracking-wide ${
                  active ? "text-crimson-400" : "text-cream-200/90 hover:text-crimson-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logo — centred */}
        <Link
          href="/"
          className="flex shrink-0 items-center justify-center leading-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.jpg"
            alt={business.name}
            className="block h-8 w-auto rounded-sm bg-white px-1.5 py-1 lg:h-14 lg:px-2"
          />
        </Link>

        {/* Phone — right */}
        <div className="flex shrink-0 items-center justify-end gap-1.5 lg:gap-2">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-1 text-[9px] font-semibold whitespace-nowrap text-cream-100 hover:text-crimson-400 lg:gap-2 lg:text-sm"
          >
            <PhoneIcon className="h-3 w-3 shrink-0 lg:h-4 lg:w-4" />
            {business.phoneDisplay}
          </a>
        </div>
      </Container>
    </header>
  );
}
