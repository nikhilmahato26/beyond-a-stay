import {
  Bath,
  BellOff,
  Bike,
  Car,
  Droplets,
  PlaneTakeoff,
  Snowflake,
  Trees,
  Users,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { amenities, diningNotes } from "../data/site";

const iconMap: Record<string, LucideIcon> = {
  Car,
  Bath,
  Users,
  Snowflake,
  Trees,
  Bike,
  VolumeX,
  Droplets,
  PlaneTakeoff,
  BellOff,
};

export function Amenities() {
  return (
    <section id="amenities" className="bg-forest py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-bone sm:text-5xl">
            Everything You Actually Need
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/70">
            No spa menu, no conference hall. Just the essentials, done well.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {amenities.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.label} delay={(i % 5) * 0.06}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-bone/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <span className="text-sm font-medium leading-snug text-bone/90">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-10 border-t border-bone/10 pt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold/90">
            Breakfast options
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {diningNotes.map((note) => (
              <li
                key={note}
                className="rounded-full border border-bone/15 px-4 py-1.5 text-sm text-bone/85"
              >
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
