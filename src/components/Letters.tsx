import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { letters, type Letter } from '@/data/content'

function LetterCard({ letter, onOpen }: { letter: Letter; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      whileTap={{ scale: 0.98 }}
      className="relative text-left rounded-2xl border border-[color:var(--champagne)]/25 bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-6 overflow-hidden group"
    >
      <div className="absolute -right-4 -top-4 text-5xl opacity-[0.08] group-hover:opacity-[0.15] transition-opacity">✉</div>
      <p className="font-serif-heading text-xl text-[color:var(--warm-white)]">{letter.title}</p>
      <p className="mt-2 text-xs tracking-wide text-[color:var(--champagne)]/80">tap to open</p>
    </motion.button>
  )
}

export function Letters() {
  const [active, setActive] = useState<Letter | null>(null)

  return (
    <section id="letters" className="relative bg-[color:var(--plum-deep)] px-6 py-24">
      <div className="max-w-lg mx-auto">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-center text-[color:var(--warm-white)]">
          Letters for you
        </h2>
        <p className="mt-3 text-center text-sm text-[color:var(--warm-white)]/50">
          open whichever one you need
        </p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {letters.map((l) => (
            <LetterCard key={l.title} letter={l} onOpen={() => setActive(l)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full max-h-[80vh] overflow-y-auto rounded-2xl border border-[color:var(--champagne)]/30 bg-[color:var(--plum)] px-8 py-10"
              style={{ boxShadow: '0 0 60px rgba(201,163,92,0.15)' }}
            >
              <p className="font-serif-heading text-2xl text-[color:var(--champagne)] mb-6">{active.title}</p>
              <p className="whitespace-pre-line text-[color:var(--warm-white)]/90 leading-relaxed font-serif-heading text-lg">
                {active.body}
              </p>
              <button
                onClick={() => setActive(null)}
                className="mt-8 text-sm text-[color:var(--pink-soft)]/80 tracking-wide"
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
