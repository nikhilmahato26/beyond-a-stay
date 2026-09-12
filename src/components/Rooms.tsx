import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { buildWhatsappLink, rooms } from "../data/site";

export function Rooms() {
  return (
    <section id="rooms" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
            Rooms Built for Rest
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Two room types, each available with or without air conditioning,
            sized and priced for however long you plan to stay.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-3xl border border-forest/10 bg-bone shadow-[0_1px_2px_rgba(30,63,55,0.06)] transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {room.variant}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-forest">{room.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{room.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-forest/15 px-3 py-1 text-xs font-medium text-forest/80"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsappLink(
                      `Hi, I'd like to check availability for the ${room.name} at Mermaid Marari.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-bone transition-all hover:-translate-y-0.5 hover:bg-forest-light active:translate-y-0 active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    Book on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
