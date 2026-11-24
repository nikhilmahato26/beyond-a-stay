import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "../data/site";

const heroImage = "/images/villa-front-courtyard.jpg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-forest">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-14 sm:px-8 lg:min-h-[calc(100dvh-72px)] lg:grid-cols-2 lg:gap-16 lg:pb-0 lg:pt-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h1 className="font-display text-5xl leading-[1.08] text-bone sm:text-6xl lg:text-[3.75rem]">
            Beyond a Stay, <em className="not-italic text-gold italic pb-1 inline-block leading-[1.1]">Beside</em>{" "}
            Marari Beach
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-bone/75">
            A family-run beachside homestay an 8-minute walk from one of Kerala's finest
            beaches, built for slow mornings and quiet evenings.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-light active:translate-y-0 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Book on WhatsApp
            </a>
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-7 py-3.5 text-sm font-semibold text-bone transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold active:translate-y-0 active:scale-[0.98]"
            >
              View Rooms
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative h-[46vh] overflow-hidden rounded-3xl sm:h-[52vh] lg:h-[68vh]"
        >
          <img
            src={heroImage}
            alt="Mermaid Marari homestay villa with lush coconut palms and paved courtyard"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/0 to-transparent" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-forest via-forest/0 to-transparent lg:block lg:-left-16 lg:w-24" />
        </motion.div>
      </div>
    </section>
  );
}
