import { motion } from 'framer-motion'
import { GlowHeart } from './GlowHeart'
import { FloatingParticles } from './FloatingParticles'
import { home } from '@/data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[color:var(--plum-deep)]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(107,74,99,0.35) 0%, rgba(28,18,32,1) 65%)',
        }}
      />
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="relative z-10"
      >
        <GlowHeart size={110} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-10 mt-8 text-xs sm:text-sm tracking-[0.25em] uppercase text-[color:var(--champagne)]"
      >
        {home.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="relative z-10 mt-4 font-serif-heading text-4xl sm:text-5xl text-[color:var(--warm-white)]"
      >
        {home.greeting}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="relative z-10 mt-5 max-w-xs sm:max-w-sm text-[color:var(--warm-white)]/70 leading-relaxed"
      >
        {home.message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.4 }}
        className="relative z-10 mt-10"
      >
        <a
          href="#story"
          className="inline-block rounded-full px-8 py-4 text-sm sm:text-base tracking-wide text-[color:var(--plum-deep)] bg-gradient-to-r from-[color:var(--champagne)] to-[color:var(--pink-soft)] shadow-[0_0_30px_rgba(201,163,92,0.35)] active:scale-[0.97] transition-transform"
        >
          {home.enterButton}
        </a>
      </motion.div>
    </section>
  )
}
