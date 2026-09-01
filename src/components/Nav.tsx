const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#photos', label: 'Photos' },
  { href: '#songs', label: 'Songs' },
  { href: '#videos', label: 'Little Moments' },
  { href: '#letters', label: 'Letters' },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--plum-deep)]/70 border-b border-white/5">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 overflow-x-auto gap-4">
        <a href="#top" className="font-serif-heading text-sm tracking-wide text-[color:var(--champagne)] shrink-0">
          a little piece of us
        </a>
        <div className="flex gap-4 text-xs sm:text-sm text-[color:var(--warm-white)]/70 shrink-0">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap hover:text-[color:var(--pink-soft)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
