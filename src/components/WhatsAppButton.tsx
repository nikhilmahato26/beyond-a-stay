import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "../data/site";

export function WhatsAppButton() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={business.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-forest-deep shadow-lg shadow-forest-deep/20 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </motion.a>
  );
}
