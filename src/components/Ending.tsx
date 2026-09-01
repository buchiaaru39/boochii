import { motion } from 'framer-motion'
import { GlowHeart } from './GlowHeart'

export function Ending() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-[color:var(--plum-deep)]">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(107,74,99,0.3) 0%, rgba(28,18,32,1) 70%)',
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 font-serif-heading text-3xl sm:text-4xl text-[color:var(--warm-white)]"
      >
        This isn't the end.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="relative z-10 mt-10"
      >
        <GlowHeart size={80} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="relative z-10 mt-8 text-4xl text-[color:var(--champagne)]"
        aria-label="infinity"
      >
        ∞
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 1.3 }}
        className="relative z-10 mt-6 text-xs tracking-[0.2em] uppercase text-[color:var(--warm-white)]/40"
      >
        more to come, always
      </motion.p>
    </section>
  )
}
