import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { galleryImages, type GalleryItem } from "../data/site";

type CategoryFilter = "all" | "rooms" | "outdoors" | "bathrooms";

const categories: { label: string; value: CategoryFilter }[] = [
  { label: "All Photos", value: "all" },
  { label: "Rooms & Suites", value: "rooms" },
  { label: "Villa & Courtyard", value: "outdoors" },
  { label: "Bathrooms & Vanity", value: "bathrooms" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, filteredImages.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null
    );
  };

  const currentItem: GalleryItem | undefined =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : undefined;

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
              Visual Tour
            </span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-forest sm:text-5xl">
              A Feel for Marari
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              The sunlit rooms, the private balcony, the peaceful courtyard, and
              the coastal warmth that defines Mermaid Marari.
            </p>
          </Reveal>

          {/* Category filter pills */}
          <Reveal delay={0.1} className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count =
                cat.value === "all"
                  ? galleryImages.length
                  : galleryImages.filter((img) => img.category === cat.value).length;
              const isActive = activeCategory === cat.value;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setLightboxIndex(null);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-forest text-bone shadow-sm"
                      : "border border-forest/15 bg-bone text-forest/75 hover:border-forest/30 hover:text-forest"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive ? "bg-bone/20 text-bone" : "bg-forest/10 text-forest/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </Reveal>
        </div>

        {/* Masonry gallery */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 6) * 0.05}
              className="mb-5 break-inside-avoid"
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(i);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-forest/5 shadow-sm transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle overlay gradient on hover */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-display text-lg text-bone">{image.title}</p>
                      <p className="mt-0.5 line-clamp-1 text-xs text-bone/70">
                        {image.alt}
                      </p>
                    </div>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bone/20 text-bone backdrop-blur">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-md"
          >
            {/* Top Bar: Counter & Close button */}
            <div
              className="absolute left-0 right-0 top-0 flex items-center justify-between p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="rounded-full bg-bone/15 px-3.5 py-1 text-xs font-medium tracking-wide text-bone">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close photo viewer"
                className="grid h-10 w-10 place-items-center rounded-full bg-bone/15 text-bone transition-transform hover:scale-110 hover:bg-bone/25"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Prev arrow */}
            <button
              type="button"
              onClick={prevLightbox}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-bone/15 text-bone backdrop-blur transition-all hover:scale-110 hover:bg-bone/25 active:scale-95 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2} />
            </button>

            {/* Center photo container */}
            <div
              className="relative max-h-[82vh] max-w-5xl overflow-hidden rounded-2xl bg-black/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentItem.src}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />

              {/* Caption at bottom of modal card */}
              <div className="bg-forest-deep/90 px-6 py-4 text-center backdrop-blur">
                <h3 className="font-display text-xl text-bone">
                  {currentItem.title}
                </h3>
                <p className="mt-1 text-xs text-bone/70 sm:text-sm">
                  {currentItem.alt}
                </p>
              </div>
            </div>

            {/* Next arrow */}
            <button
              type="button"
              onClick={nextLightbox}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-bone/15 text-bone backdrop-blur transition-all hover:scale-110 hover:bg-bone/25 active:scale-95 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
