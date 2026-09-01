export function GlowHeart({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="animate-heart-glow"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a35c" />
          <stop offset="55%" stopColor="#e9c3c9" />
          <stop offset="100%" stopColor="#6b4a63" />
        </linearGradient>
      </defs>
      <path
        d="M50 88
           C 22 68, 4 50, 4 30
           C 4 14, 17 3, 32 3
           C 41 3, 47 8, 50 14
           C 53 8, 59 3, 68 3
           C 83 3, 96 14, 96 30
           C 96 50, 78 68, 50 88 Z"
        fill="url(#heartGradient)"
      />
    </svg>
  )
}
