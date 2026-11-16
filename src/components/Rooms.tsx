import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { buildWhatsappLink, rooms, type RoomType } from "../data/site";

function RoomCard({ room }: { room: RoomType }) {
  const images = room.images && room.images.length > 0 ? room.images : [room.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-forest/10 bg-bone shadow-[0_1px_2px_rgba(30,63,55,0.06)] transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-forest/5">
        <img
          src={images[currentIndex]}
          alt={`${room.name} photo ${currentIndex + 1} of ${images.length}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {images.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
              <button
                type="button"
                onClick={prevImage}
                aria-label={`Previous image for ${room.name}`}
                className="grid h-8 w-8 place-items-center rounded-full bg-forest-deep/75 text-bone backdrop-blur transition-all hover:bg-forest-deep hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label={`Next image for ${room.name}`}
                className="grid h-8 w-8 place-items-center rounded-full bg-forest-deep/75 text-bone backdrop-blur transition-all hover:bg-forest-deep hover:scale-110 active:scale-95"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-forest-deep/65 px-2.5 py-1 backdrop-blur">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  aria-label={`Go to photo ${dotIdx + 1} of ${room.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setCurrentIndex(dotIdx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    dotIdx === currentIndex
                      ? "w-4 bg-gold"
                      : "w-1.5 bg-bone/60 hover:bg-bone"
                  }`}
                />
              ))}
            </div>
          </>
        )}
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
  );
}

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
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
