"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

      {/* Same layout at every size — logo-left / nav-center / phone+CTA-right.
          Everything must fit on one row on mobile, no scrolling — sized down
          as far as it takes. */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-1 overflow-x-hidden px-2 py-1.5 lg:gap-4 lg:px-8 lg:py-3">

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
            style={{ display: 'block', background: 'white' }}
            className="h-5 w-auto lg:h-[91px]"
          />
        </Link>

        {/* Nav — centred, no scroll */}
        <nav className="flex min-w-0 items-center justify-center gap-1 lg:gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[7px] leading-none font-medium uppercase transition-colors lg:text-sm lg:tracking-wide ${
                  active ? "text-crimson-500" : "text-navy-800 hover:text-crimson-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone + CTA */}
        <div className="flex shrink-0 items-center justify-end gap-1 lg:gap-4">
          <a
            href={`tel:${business.phoneTel}`}
            className="flex items-center gap-0.5 text-[7px] leading-none font-semibold whitespace-nowrap text-navy-800 hover:text-crimson-500 lg:gap-2 lg:text-sm"
          >
            <PhoneIcon className="h-2.5 w-2.5 shrink-0 lg:h-4 lg:w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-crimson-500 px-1 py-0.5 text-[7px] leading-none font-semibold whitespace-nowrap uppercase text-white transition-colors hover:bg-crimson-600 lg:px-5 lg:py-2 lg:text-sm lg:tracking-wide"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
