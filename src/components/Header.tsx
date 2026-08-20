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

      {/* Always visible, single row at every size — logo, every nav link,
          phone number, and the CTA button all shown together, sized down
          on mobile so nothing has to hide or wrap. */}
      <Container className="flex items-center gap-1.5 py-2 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-4 lg:py-3">

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
            className="block h-7 w-auto bg-white lg:h-[76px]"
          />
        </Link>

        {/* Nav — one unbroken group; scrolls only if it truly can't fit */}
        <nav className="scrollbar-none flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto whitespace-nowrap lg:flex-none lg:justify-center lg:gap-7 lg:overflow-visible">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] font-medium uppercase transition-colors lg:text-sm lg:tracking-wide ${
                  active ? "text-crimson-500" : "text-navy-800 hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone + CTA */}
        <div className="flex shrink-0 items-center gap-1.5 lg:gap-4 lg:justify-end">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-1 text-[9px] font-semibold whitespace-nowrap text-navy-800 hover:text-crimson-500 lg:gap-2 lg:text-sm"
          >
            <PhoneIcon className="h-3 w-3 shrink-0 lg:h-4 lg:w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-crimson-500 px-1.5 py-1 text-[9px] font-semibold whitespace-nowrap uppercase text-white transition-colors hover:bg-crimson-600 lg:px-5 lg:py-2 lg:text-sm lg:tracking-wide"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </header>
  );
}
