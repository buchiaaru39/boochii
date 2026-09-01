import { useEffect, useState } from 'react'
import { SITE_PASSCODE } from '@/data/content'
import { GlowHeart } from './GlowHeart'
import { FloatingParticles } from './FloatingParticles'

const STORAGE_KEY = 'aliteralpieceofus_unlocked'

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(STORAGE_KEY) === 'true')
  }, [])

  if (unlocked === null) {
    return <div className="min-h-screen bg-[color:var(--plum-deep)]" />
  }

  if (unlocked) {
    return <>{children}</>
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value.trim().toLowerCase() === SITE_PASSCODE.toLowerCase()) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[color:var(--plum-deep)] px-6 overflow-hidden">
      <FloatingParticles variant="dots" />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex flex-col items-center gap-6 text-center max-w-sm w-full"
      >
        <GlowHeart size={64} />
        <p className="font-serif-heading text-2xl text-[color:var(--warm-white)]">
          this is a private world
        </p>
        <p className="text-sm text-[color:var(--pink-soft)]/80">
          you know the passcode
        </p>
        <input
          type="password"
          inputMode="text"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          placeholder="passcode"
          className="w-full text-center bg-white/5 border border-[color:var(--champagne)]/30 focus:border-[color:var(--champagne)] outline-none rounded-full py-4 px-6 text-[color:var(--warm-white)] placeholder:text-[color:var(--warm-white)]/30 tracking-widest transition-colors"
        />
        {error && (
          <p className="text-xs text-[color:var(--pink-soft)]">
            that's not quite it — try again
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-full py-4 px-6 font-medium tracking-wide text-[color:var(--plum-deep)] bg-gradient-to-r from-[color:var(--champagne)] to-[color:var(--pink-soft)] active:scale-[0.98] transition-transform"
        >
          Unlock
        </button>
      </form>
    </div>
  )
}
