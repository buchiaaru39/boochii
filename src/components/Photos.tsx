import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { photoCategories, type Photo } from '@/data/content'

function PhotoTile({ photo, onOpen }: { photo: Photo; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      whileTap={{ scale: 0.97 }}
      className="relative shrink-0 w-40 sm:w-52 aspect-[3/4] rounded-xl overflow-hidden border border-white/10 snap-start"
    >
      {photo.src ? (
        <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: 'linear-gradient(145deg, var(--plum) 0%, var(--plum-soft) 100%)' }}
        >
          <span className="text-2xl opacity-40">❤</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
        <p className="text-xs text-white/85 truncate">{photo.caption}</p>
      </div>
    </motion.button>
  )
}

export function Photos() {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <section id="photos" className="relative bg-[color:var(--plum-deep)] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-center text-[color:var(--warm-white)]">
          Photos
        </h2>
        <p className="mt-3 text-center text-sm text-[color:var(--warm-white)]/50">
          little proof that it all really happened
        </p>

        <div className="mt-14 flex flex-col gap-12">
          {photoCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm tracking-[0.15em] uppercase text-[color:var(--champagne)] mb-4">
                {cat.name}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2 snap-x -mx-6 px-6">
                {cat.photos.map((p, i) => (
                  <PhotoTile key={i} photo={p} onOpen={() => setActive(p)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-full max-h-full flex flex-col items-center"
            >
              {active.src ? (
                <img src={active.src} alt={active.caption} className="max-h-[75vh] max-w-full rounded-lg object-contain" />
              ) : (
                <div className="w-72 aspect-[3/4] rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(145deg, var(--plum) 0%, var(--plum-soft) 100%)' }}>
                  <span className="text-4xl opacity-40">❤</span>
                </div>
              )}
              <p className="mt-4 text-[color:var(--warm-white)]/80 text-sm">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
