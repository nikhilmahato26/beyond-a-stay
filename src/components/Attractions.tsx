import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { attractions } from "../data/site";

export function Attractions() {
  return (
    <section id="nearby" className="bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
            Worth Wandering To
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Marari Beach is right outside, and Alappuzha's backwaters, temples
            and heritage sites are all within a short drive.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div className="scrollbar-none flex gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [scroll-snap-type:x_mandatory]">
          {attractions.map((place) => (
            <div
              key={place.name}
              className="flex w-[220px] shrink-0 flex-col gap-4 rounded-2xl border border-forest/10 bg-white p-6 [scroll-snap-align:start]"
            >
              <MapPin className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
              <div>
                <p className="font-display text-2xl text-forest">{place.distance}</p>
                <p className="mt-1 text-sm leading-snug text-ink/65">{place.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
