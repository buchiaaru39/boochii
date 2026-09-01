import { motion } from 'framer-motion'
import { videos, type Video } from '@/data/content'

function VideoCard({ video }: { video: Video }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl overflow-hidden border border-[color:var(--champagne)]/20 bg-white/[0.03]"
    >
      {video.src ? (
        <video src={video.src} controls playsInline className="w-full aspect-video object-cover bg-black" />
      ) : (
        <div className="w-full aspect-video flex items-center justify-center" style={{ background: 'linear-gradient(145deg, var(--plum) 0%, var(--plum-soft) 100%)' }}>
          <span className="text-3xl opacity-40">▸</span>
        </div>
      )}
      <p className="px-4 py-3 text-sm text-[color:var(--warm-white)]/75">{video.caption}</p>
    </motion.div>
  )
}

export function Videos() {
  return (
    <section id="videos" className="relative bg-[color:var(--plum-deep)] px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-center text-[color:var(--warm-white)]">
          Little Moments
        </h2>
        <p className="mt-3 text-center text-sm text-[color:var(--warm-white)]/50">
          small videos, kept safe
        </p>
        <div className="mt-14 flex flex-col gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
