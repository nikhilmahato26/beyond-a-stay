import { Reveal } from "./Reveal";
import { galleryImages } from "../data/site";

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight text-forest sm:text-5xl">
            A Feel for Marari
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            The rooms, the coast, and the everyday textures of the village
            around them.
          </p>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 6) * 0.05} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
