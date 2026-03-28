import { useState } from 'react'
import { Link } from 'react-router-dom'

const OPERATION_CARDS = [
  {
    icon: '💪',
    title: 'Arms Acquisition',
    desc: 'We source only the finest arms in the business. Biceps-grade and built to impress.',
  },
  {
    icon: '♠',
    title: 'Strategic Dealing',
    desc: 'Our dealers operate with precision and poker faces. Every hand is played to win.',
  },
  {
    icon: '🏋️',
    title: 'Field Operations',
    desc: 'Our operatives train hard. Arm day is non-negotiable. So is a healthy appreciation for mezgronis.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'I used to curl 10 lbs. Now I can lift ladies above my head for a party trick.',
    name: 'Operative [REDACTED]',
    title: 'Ladies Man',
    suit: '♣',
  },
  {
    quote:
      "They said my guns weren't big enough. Arms & Dealt gave me the size I needed.",
    name: 'Asset ♦',
    title: 'Former Accountant',
    suit: '♦',
  },
  {
    quote: 'I came for the dealing. I stayed for the arms.',
    name: 'Agent [CLASSIFIED]',
    title: '',
    suit: '♠',
  },
]

export default function Home() {
  const [flipped, setFlipped] = useState([false, false, false])

  const toggleFlip = (i) => {
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <div className="bg-navy min-h-screen font-sans text-offwhite relative overflow-x-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <span className="text-xl text-gold select-none" title="crossed dumbbells">
                🏋️
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gold uppercase">
                Arms &amp; Dealt
              </span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-gold/50 uppercase pl-8">
              We deal in arms.
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden sm:flex items-center gap-6 text-xs tracking-widest uppercase text-offwhite/70">
            <a href="#operation" className="hover:text-gold transition-colors duration-200">
              The Operation
            </a>
            <a href="#intel" className="hover:text-gold transition-colors duration-200">
              Intel
            </a>
            <Link
              to="/apply"
              className="px-4 py-2 border border-gold/50 text-gold hover:bg-gold/10 transition-all duration-200 tracking-widest"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile join link */}
          <Link
            to="/apply"
            className="sm:hidden px-3 py-1.5 border border-gold/50 text-gold text-xs tracking-widest uppercase hover:bg-gold/10 transition-all duration-200"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16 suit-pattern-bg noise-overlay">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%), linear-gradient(180deg, #0a0f1e 0%, #0d1325 50%, #0a0f1e 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Recruiting badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="pulse-badge inline-flex items-center gap-2 bg-red-900/40 border border-red-500/60 text-red-400 text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              Currently Recruiting
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-offwhite leading-tight tracking-tight mb-6">
            ARE YOU{' '}
            <span className="text-gold italic">BUILT</span>
            <br />
            FOR THIS BUSINESS?
          </h1>

          <p className="text-base sm:text-lg text-offwhite/65 tracking-wide max-w-xl mx-auto mb-10 font-light">
            We&apos;re recruiting elite operatives with the right a$$ets.
          </p>

          <Link
            to="/apply"
            className="btn-gold inline-block bg-gold text-navy font-bold text-sm tracking-[0.3em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors duration-200"
          >
            Apply for Arms
          </Link>

          {/* Decorative suits */}
          <div className="mt-16 flex justify-center gap-6 text-gold/20 text-2xl select-none">
            <span>♠</span>
            <span>♥</span>
            <span>♣</span>
            <span>♦</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/30 text-xs tracking-widest uppercase animate-bounce">
          ↓
        </div>
      </section>

      {/* ── The Operation ── */}
      <section id="operation" className="relative py-24 px-4 bg-charcoal noise-overlay">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-3">
              ♠ Classified Briefing ♠
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-offwhite">
              What We Do
            </h2>
            <div className="mt-4 w-16 h-px bg-gold/40 mx-auto" />
          </div>

          {/* Flip cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OPERATION_CARDS.map((card, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Card scene */}
                <div
                  className="card-scene w-full"
                  style={{ height: '280px' }}
                  onClick={() => toggleFlip(i)}
                  role="button"
                  aria-label={`Reveal ${card.title}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleFlip(i)}
                >
                  <div className={`card-inner ${flipped[i] ? 'flipped' : ''}`}>
                    {/* Back face */}
                    <div className="card-face card-back-pattern rounded-sm border border-gold/20 flex flex-col items-center justify-center gap-4 p-6">
                      {/* Card back border frame */}
                      <div className="absolute inset-3 border border-gold/15 rounded-sm pointer-events-none" />
                      <div className="absolute inset-5 border border-gold/08 rounded-sm pointer-events-none" />
                      {/* Suit grid pattern */}
                      <div className="grid grid-cols-3 gap-3 opacity-30 select-none text-gold text-lg">
                        {['♠','♥','♣','♦','♠','♥','♣','♦','♠'].map((s, j) => (
                          <span key={j} className={j % 2 === 1 ? 'opacity-50' : ''}>{s}</span>
                        ))}
                      </div>
                      <div className="absolute bottom-4 right-4 text-gold/20 text-xs font-mono tracking-widest uppercase">
                        A&amp;D
                      </div>
                    </div>

                    {/* Front face */}
                    <div className="card-face card-face-front bg-charcoal border border-gold/30 rounded-sm p-6 flex flex-col justify-center items-start gap-4"
                      style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #141824 100%)' }}
                    >
                      <div className="text-4xl">{card.icon}</div>
                      <h3 className="font-serif text-xl font-bold text-gold">{card.title}</h3>
                      <p className="text-offwhite/70 text-sm leading-relaxed">{card.desc}</p>
                      <div className="text-gold/20 text-xs mt-auto self-end">♠</div>
                    </div>
                  </div>
                </div>

                {/* Hint below card — hidden once flipped */}
                {!flipped[i] && (
                  <p className="card-hint mt-3 text-xs text-gold/35 italic tracking-wider">
                    — classified, tap to reveal —
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials / Field Reports ── */}
      <section id="intel" className="relative py-24 px-4 bg-navy suit-pattern-bg">
        {/* CLASSIFIED watermark */}
        <div className="absolute top-12 right-8 sm:right-16 pointer-events-none select-none z-0">
          <div className="stamp-classified text-2xl sm:text-4xl px-4 py-2 font-bold font-sans tracking-[0.2em]">
            CLASSIFIED
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-3">
              ♦ Verified Intel ♦
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-offwhite">
              Field Reports
            </h2>
            <div className="mt-4 w-16 h-px bg-gold/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative bg-charcoal/60 border border-gold/15 p-6 rounded-sm"
                style={{ background: 'linear-gradient(160deg, #181c28 0%, #111520 100%)' }}
              >
                {/* Redacted stripe top */}
                <div className="flex gap-1 mb-4">
                  {[...Array(6)].map((_, j) => (
                    <div
                      key={j}
                      className="h-1.5 rounded-full bg-gold/20"
                      style={{ width: `${[40,20,60,30,50,25][j]}px` }}
                    />
                  ))}
                </div>

                <div className="text-gold/40 text-2xl mb-3 select-none">{t.suit}</div>

                <blockquote className="text-offwhite/80 text-sm leading-relaxed italic mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="border-t border-gold/10 pt-4">
                  <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                    — {t.name}
                  </p>
                  {t.title && (
                    <p className="text-offwhite/40 text-xs tracking-wider mt-1">{t.title}</p>
                  )}
                </div>

                {/* Corner fold */}
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
                  style={{
                    background: 'linear-gradient(225deg, #0a0f1e 50%, transparent 50%)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA below testimonials */}
          <div className="text-center mt-16">
            <p className="text-offwhite/40 text-sm tracking-wider mb-6">
              Ready to write your own field report?
            </p>
            <Link
              to="/apply"
              className="btn-gold inline-block border border-gold text-gold text-xs font-semibold tracking-[0.3em] uppercase px-8 py-3 hover:bg-gold/10 transition-colors duration-200"
            >
              Submit Your Dossier
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-charcoal border-t border-gold/10 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 text-gold/30 text-lg mb-4 select-none">
            <span>♠</span>
            <span className="text-gold/15">|</span>
            <span>♥</span>
            <span className="text-gold/15">|</span>
            <span>♣</span>
            <span className="text-gold/15">|</span>
            <span>♦</span>
          </div>

          <div className="font-serif text-gold/70 text-sm mb-3 tracking-wider">
            Arms &amp; Dealt
          </div>

          <p className="text-offwhite/30 text-xs tracking-wide leading-relaxed max-w-lg mx-auto">
            &copy; Arms &amp; Dealt. All operations confidential.
            Not responsible for pulled muscles or bad beats.
          </p>

          <div className="mt-6 flex justify-center gap-4 text-gold/20 text-xs tracking-widest uppercase">
            <span>Top Secret</span>
            <span className="text-gold/10">♦</span>
            <span>Eyes Only</span>
            <span className="text-gold/10">♦</span>
            <span>Burn After Reading</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
