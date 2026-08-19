import Link from "next/link";
import { Container } from "./Container";
import {
  AnchorIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";
import { business, services } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream-200">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <AnchorIcon className="h-6 w-6 text-brass-500" />
            <span className="font-display text-lg text-cream-100">
              {business.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream-200/80">
            {business.tagline}. Proudly serving {business.serviceArea}.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-cream-200/70 hover:text-brass-400"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-cream-200/70 hover:text-brass-400"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-cream-100">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-200/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-brass-400">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-cream-100">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-200/80">
            <li>
              <Link href="/about" className="hover:text-brass-400">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-brass-400">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brass-400">Get a Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-cream-100">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
              <a href={`tel:${business.phoneTel}`} className="hover:text-brass-400">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
              <a href={`mailto:${business.email}`} className="hover:text-brass-400">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
              <span>{business.serviceArea}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-500" />
              <span>{business.hours[0].day}: {business.hours[0].time}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-200/60 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p>{business.domain}</p>
        </Container>
      </div>
    </footer>
  );
}
