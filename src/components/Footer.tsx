import { InstagramIcon } from "./icons/InstagramIcon";
import logo from "../assets/logo1.png";
import { business, navLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Mermaid Marari emblem" className="h-14 w-14" />
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-bone/60">
              A family-run beachside homestay by Marari Beach, Mararikulam, Kerala.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold/80">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-bone/70 hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold/80">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-bone/70">
              <li>{business.address}</li>
              <li>
                <a href={business.phonePrimaryHref} className="hover:text-gold">
                  {business.phonePrimary}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="hover:text-gold">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold/80">
              Follow
            </p>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Mermaid Marari on Instagram"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-bone/10 pt-6 text-sm text-bone/45">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
