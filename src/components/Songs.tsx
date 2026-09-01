import { motion } from 'framer-motion'
import { songSections, type Song } from '@/data/content'

function songEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    return `https://open.spotify.com/embed${u.pathname}`
  } catch {
    return null
  }
}

function SongCard({ song }: { song: Song }) {
  const embed = song.spotifyUrl ? songEmbedUrl(song.spotifyUrl) : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-[color:var(--champagne)]/20 bg-white/[0.03] overflow-hidden"
    >
      {embed ? (
        <iframe
          src={embed}
          width="100%"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
          loading="lazy"
          className="block"
          title={song.title}
        />
      ) : (
        <div className="flex items-center gap-4 px-5 py-4">
          <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-lg animate-shimmer" style={{ background: 'linear-gradient(145deg, var(--champagne), var(--pink-soft))' }}>
            ♪
          </div>
          <div>
            <p className="text-sm text-[color:var(--warm-white)]">{song.title}</p>
            <p className="text-xs text-[color:var(--warm-white)]/45">{song.subtitle}</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function Songs() {
  return (
    <section id="songs" className="relative bg-[color:var(--plum-deep)] px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-center text-[color:var(--warm-white)]">
          Songs that remind me of you
        </h2>
        <div className="mt-14 flex flex-col gap-10">
          {songSections.map((section) => (
            <div key={section.name}>
              <h3 className="text-sm tracking-[0.15em] uppercase text-[color:var(--champagne)] mb-4">
                {section.name}
              </h3>
              <div className="flex flex-col gap-3">
                {section.songs.map((s, i) => (
                  <SongCard key={i} song={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
