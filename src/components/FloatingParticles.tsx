// Decorative floating hearts + glowing dots. Purely visual, no editing needed.
const HEART_COUNT = 7
const DOT_COUNT = 10

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function FloatingParticles({ variant = 'mixed' }: { variant?: 'mixed' | 'dots' }) {
  const hearts = variant === 'mixed'
    ? Array.from({ length: HEART_COUNT }, (_, i) => i)
    : []
  const dots = Array.from({ length: DOT_COUNT }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((i) => {
        const left = seededRandom(i * 3.1) * 100
        const duration = 14 + seededRandom(i * 7.7) * 10
        const delay = seededRandom(i * 5.3) * 12
        const size = 10 + seededRandom(i * 2.2) * 10
        const drift = (seededRandom(i * 9.9) - 0.5) * 60
        return (
          <span
            key={`h-${i}`}
            className="floating-particle absolute bottom-0 text-[color:var(--pink-soft)]"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              // @ts-ignore custom property for the drift keyframe
              '--drift': `${drift}px`,
              opacity: 0.5,
            }}
          >
            ❤
          </span>
        )
      })}
      {dots.map((i) => {
        const left = seededRandom(i * 4.4 + 1) * 100
        const duration = 10 + seededRandom(i * 6.6 + 1) * 12
        const delay = seededRandom(i * 8.8 + 1) * 14
        const drift = (seededRandom(i * 3.3 + 1) - 0.5) * 40
        return (
          <span
            key={`d-${i}`}
            className="floating-particle absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: 3,
              height: 3,
              background: 'var(--champagne)',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              // @ts-ignore
              '--drift': `${drift}px`,
              boxShadow: '0 0 6px rgba(201,163,92,0.8)',
            }}
          />
        )
      })}
    </div>
  )
}
