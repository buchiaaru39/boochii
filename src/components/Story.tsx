import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { timeline, timelineStart } from '@/data/content'

function useElapsed(startDate: string) {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const start = new Date(startDate).getTime()
    const tick = () => {
      const diff = Math.max(0, Date.now() - start)
      const days = Math.floor(diff / 86_400_000)
      const hours = Math.floor((diff % 86_400_000) / 3_600_000)
      const minutes = Math.floor((diff % 3_600_000) / 60_000)
      const seconds = Math.floor((diff % 60_000) / 1000)
      setElapsed({ days, hours, minutes, seconds })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [startDate])

  return elapsed
}

export function Story() {
  const { days, hours, minutes, seconds } = useElapsed(timelineStart)

  return (
    <section id="story" className="relative bg-[color:var(--plum-deep)] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-center text-[color:var(--warm-white)]">
          Our story
        </h2>

        <div className="mt-8 mx-auto max-w-xs text-center rounded-2xl border border-[color:var(--champagne)]/20 bg-white/[0.03] px-6 py-5">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--champagne)]">
            ours, for
          </p>
          <p className="mt-2 font-serif-heading text-2xl text-[color:var(--pink-soft)]">
            {days} days
          </p>
          <p className="mt-1 text-xs text-[color:var(--warm-white)]/50 tabular-nums">
            {hours}h {minutes}m {seconds}s
          </p>
        </div>

        <div className="relative mt-16 pl-8">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--champagne)]/60 via-[color:var(--pink-soft)]/30 to-transparent" />
          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => (
              <motion.div
                key={item.date + item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-[color:var(--champagne)] shadow-[0_0_14px_3px_rgba(201,163,92,0.55)]" />
                <p className="text-xs tracking-[0.15em] uppercase text-[color:var(--champagne)]">
                  {item.date}
                </p>
                <p className="mt-1 font-serif-heading text-xl text-[color:var(--warm-white)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[color:var(--warm-white)]/60 leading-relaxed max-w-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
