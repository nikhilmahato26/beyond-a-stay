import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./icons/InstagramIcon";
import { business } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between gap-10 bg-forest p-8 sm:p-12">
            <div>
              <h2 className="font-display text-4xl leading-tight text-bone sm:text-5xl">
                Come Find Us
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-bone/70">
                Reach out on WhatsApp for the fastest reply, or use the
                details below.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-bone/85">{business.address}</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <a href={business.phonePrimaryHref} className="text-bone/85 hover:text-gold">
                  {business.phonePrimary}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <a href={`mailto:${business.email}`} className="text-bone/85 hover:text-gold">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-bone/85 hover:text-gold"
                >
                  @mermaidmarari
                </a>
              </li>
            </ul>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-light active:translate-y-0 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
          </Reveal>

          <Reveal
            delay={0.12}
            className="relative flex min-h-80 flex-col items-start justify-end gap-5 bg-forest-light p-8 sm:p-12 lg:min-h-full"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1.5px 1.5px, var(--color-bone) 1.5px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            <MapPin className="relative h-10 w-10 text-gold" strokeWidth={1.25} />
            <div className="relative">
              <p className="font-display text-2xl text-bone">Mararikulam, Alappuzha</p>
              <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-bone/70">
                An 8-minute walk from Marari Beach, on the Mararikulam beach
                road.
              </p>
            </div>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm font-semibold text-bone transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold active:translate-y-0 active:scale-[0.98]"
            >
              <Navigation className="h-4 w-4" strokeWidth={2} />
              Get Directions
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
