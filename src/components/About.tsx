import { Reveal } from "./Reveal";
import { propertyImage } from "../data/site";

const tiles = [
  {
    title: "Private & Air-Conditioned",
    body: "Family rooms with private bathrooms, balconies and garden views, each fitted with air conditioning and a quiet, soundproofed interior.",
  },
  {
    title: "Home-Style Breakfast",
    body: "Continental, American, English, vegetarian and vegan breakfast, served fresh in our dining area each morning.",
  },
  {
    title: "Garden & Free Parking",
    body: "Bicycle parking, free private parking, and a garden courtyard for slow afternoons and quiet evenings.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-bone py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
            Comfort, Kept Simple
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Mermaid Marari is a small, family-run homestay in Mararikulam,
            built around a pristine beach and a slower pace of life. Every
            room is designed for comfort first: private, air-conditioned, and
            just steps from the garden.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="lg:col-span-1 lg:row-span-2">
            <figure className="h-full overflow-hidden rounded-3xl bg-forest-dark">
              <img
                src={propertyImage}
                alt="Mermaid Marari homestay building and gated courtyard"
                className="h-64 w-full object-cover object-top lg:h-full"
              />
            </figure>
          </Reveal>

          {tiles.map((tile, i) => (
            <Reveal
              key={tile.title}
              delay={0.1 + i * 0.08}
              className={i === 0 ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <div className="flex h-full flex-col justify-center rounded-3xl border border-forest/10 bg-white p-8 shadow-[0_1px_2px_rgba(30,63,55,0.06)]">
                <h3 className="font-display text-2xl text-forest">{tile.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{tile.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
