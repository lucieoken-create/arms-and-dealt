import { useState } from 'react'
import { Link } from 'react-router-dom'

const SUIT_OPTIONS = [
  { value: 'spades', label: '♠ Spades' },
  { value: 'hearts', label: '♥ Hearts' },
  { value: 'clubs', label: '♣ Clubs' },
  { value: 'diamonds', label: '♦ Diamonds' },
]

const REQUIREMENTS = [
  'Must be capable of carrying purses at museums and concerts without complaint.',
  'Willingness to frequently travel across the ocean.',
  'No prior arms dealing experience required. Prior arm day experience preferred.',
]

export default function Apply() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    codename: '',
    preferredArm: '',
    suit: '',
    whyJoin: '',
    howHeard: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-navy min-h-screen font-sans text-offwhite">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <span className="text-gold/70 text-base select-none leading-none">♠</span>
              <span className="font-serif text-xl sm:text-2xl tracking-[0.1em] text-gold uppercase leading-none">
                Arms &amp; Dealt
              </span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-gold/50 uppercase pl-5 mt-0.5">
              We deal in arms.
            </span>
          </Link>

          <Link
            to="/"
            className="font-serif text-sm tracking-[0.12em] text-offwhite/50 hover:text-gold uppercase transition-colors duration-200"
          >
            ← Back to Base
          </Link>
        </div>
      </nav>

      {/* ── Hero Header ── */}
      <section className="relative pt-32 pb-16 px-4 text-center suit-pattern-bg noise-overlay">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Warning badge */}
          <div className="inline-flex items-center gap-2 mb-8 bg-amber-900/30 border border-amber-500/50 text-amber-400 text-xs font-bold tracking-[0.25em] uppercase px-5 py-2.5">
            <span className="text-amber-400">⚠</span>
            Limited Clearances Available
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl text-offwhite leading-none tracking-[0.05em] mb-6">
            JOIN THE{' '}
            <span className="text-gold">OPERATION</span>
          </h1>

          <p className="text-offwhite/60 text-base sm:text-lg tracking-wide font-light max-w-xl mx-auto">
            We only recruit the best. Fill out your dossier below.
          </p>

          <div className="mt-6 flex justify-center gap-4 text-gold/20 text-xl select-none">
            <span>♠</span><span>♥</span><span>♣</span><span>♦</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 pb-24 space-y-10">

        {/* ── Success Message ── */}
        {submitted && (
          <div className="relative border border-gold/40 bg-charcoal/80 p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #141a1a 0%, #111520 100%)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="text-gold text-3xl mb-4 font-serif">✓</div>
            <h2 className="font-serif text-4xl sm:text-5xl text-gold mb-3 tracking-[0.08em] uppercase">
              Transmission Received
            </h2>
            <p className="text-offwhite/80 text-sm sm:text-base tracking-widest uppercase font-semibold leading-relaxed">
              YOUR APPLICATION HAS BEEN RECEIVED.<br />
              AWAIT CONTACT.<br />
              DO NOT CALL US.
            </p>
            <div className="mt-6 flex justify-center gap-3 text-gold/30 select-none">
              <span>♠</span><span>♥</span><span>♣</span><span>♦</span>
            </div>
          </div>
        )}

        {/* ── Requirements Document ── */}
        <div className="relative redacted-doc rounded-sm px-6 py-8 font-mono overflow-hidden">
          {/* TOP SECRET stamp */}
          <div className="absolute top-4 right-4 sm:right-8 pointer-events-none select-none">
            <div className="stamp-classified text-sm sm:text-base px-3 py-1 tracking-[0.15em]">
              TOP SECRET
            </div>
          </div>

          <div className="mb-5">
            <p className="text-gold/50 text-xs tracking-[0.4em] uppercase mb-1">
              Ref: A&amp;D-REQ-7734-B
            </p>
            <h2 className="text-offwhite/90 text-lg sm:text-xl font-bold tracking-widest uppercase">
              Operative Requirements
            </h2>
            <div className="mt-2 w-12 h-px bg-gold/30" />
          </div>

          <ul className="space-y-4">
            {REQUIREMENTS.map((req, i) => (
              <li key={i} className="flex gap-3 text-offwhite/75 text-sm leading-relaxed">
                <span className="text-gold/50 mt-0.5 flex-shrink-0 font-bold">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-gold/10 text-gold/30 text-xs tracking-widest uppercase">
            Classification: Sensitive ♦ Distribution: Need-to-Know
          </div>
        </div>

        {/* ── Application Form ── */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            name="recruitment"
            data-netlify="true"
            className="relative border border-gold/25 rounded-sm overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #12182a 0%, #0e1422 100%)' }}
          >
            {/* Required for Netlify Forms + React SPA */}
            <input type="hidden" name="form-name" value="recruitment" />
            {/* Gold top accent bar */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="px-6 sm:px-10 py-10 space-y-8">
              {/* Form header */}
              <div>
                <p className="text-gold/50 text-xs tracking-[0.4em] uppercase mb-1">
                  Ref: A&amp;D-APP-{new Date().getFullYear()}
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-offwhite tracking-[0.06em]">
                  Operative Dossier
                </h2>
                <p className="mt-2 text-offwhite/40 text-xs tracking-wider">
                  All fields are classified. Complete with discretion.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gold/15" />
                <span className="text-gold/30 text-xs">♠</span>
                <div className="flex-1 h-px bg-gold/15" />
              </div>

              {/* Codename */}
              <div className="space-y-2">
                <label className="block text-gold/80 text-xs font-semibold tracking-[0.3em] uppercase">
                  Codename
                </label>
                <input
                  type="text"
                  name="codename"
                  value={form.codename}
                  onChange={handleChange}
                  placeholder="e.g. The Dealer, Iron Mike, Ace..."
                  required
                  className="w-full bg-navy/60 border border-gold/20 text-offwhite/90 text-sm px-4 py-3 placeholder-offwhite/20 focus:outline-none focus:border-gold/60 transition-colors duration-200 font-mono"
                />
              </div>

              {/* Preferred Arm */}
              <div className="space-y-2">
                <label className="block text-gold/80 text-xs font-semibold tracking-[0.3em] uppercase">
                  Preferred Arm
                </label>
                <select
                  name="preferredArm"
                  value={form.preferredArm}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy/60 border border-gold/20 text-offwhite/90 text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23c9a84c' fill-opacity='0.5' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select operative arm...</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="both">Both — I don&apos;t discriminate</option>
                </select>
              </div>

              {/* Favorite Card Suit */}
              <div className="space-y-3">
                <label className="block text-gold/80 text-xs font-semibold tracking-[0.3em] uppercase">
                  Favorite Card Suit
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SUIT_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex items-center justify-center gap-2 border px-3 py-3 cursor-pointer transition-all duration-200 text-sm ${
                        form.suit === opt.value
                          ? 'border-gold/60 bg-gold/10 text-gold'
                          : 'border-gold/15 text-offwhite/60 hover:border-gold/30 hover:text-offwhite/80'
                      }`}
                    >
                      <input
                        type="radio"
                        name="suit"
                        value={opt.value}
                        checked={form.suit === opt.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <span className="font-semibold">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Why join */}
              <div className="space-y-2">
                <label className="block text-gold/80 text-xs font-semibold tracking-[0.3em] uppercase">
                  Why do you want to join the operation?
                </label>
                <select
                  name="whyJoin"
                  value={form.whyJoin}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy/60 border border-gold/20 text-offwhite/90 text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23c9a84c' fill-opacity='0.5' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>State your motivation...</option>
                  <option value="morals">I have suspect morals</option>
                  <option value="science">Science hasn&apos;t worked out for me</option>
                  <option value="children">I&apos;m trying to make money for my 12 children</option>
                </select>
              </div>

              {/* How heard */}
              <div className="space-y-2">
                <label className="block text-gold/80 text-xs font-semibold tracking-[0.3em] uppercase">
                  How did you hear about us?
                </label>
                <select
                  name="howHeard"
                  value={form.howHeard}
                  onChange={handleChange}
                  required
                  className="w-full bg-navy/60 border border-gold/20 text-offwhite/90 text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors duration-200 appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23c9a84c' fill-opacity='0.5' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="" disabled>Select channel...</option>
                  <option value="word">Word of mouth</option>
                  <option value="dark-web">Dark web</option>
                  <option value="gym">The gym</option>
                  <option value="classified">Classified</option>
                </select>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gold/15" />
                <span className="text-gold/30 text-xs">♦</span>
                <div className="flex-1 h-px bg-gold/15" />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto bg-gold text-navy font-serif text-xl tracking-[0.15em] uppercase px-12 py-3 hover:bg-gold/90 transition-colors duration-200"
                >
                  Submit Dossier
                </button>
                <p className="mt-4 text-offwhite/25 text-xs tracking-wider">
                  Submission is irrevocable. Dossier will be reviewed at our discretion.
                </p>
              </div>
            </div>

            {/* Gold bottom accent */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </form>
        )}

        {/* ── Disclaimer ── */}
        <div className="border-t border-gold/10 pt-8 text-center">
          <p className="text-offwhite/20 text-xs leading-relaxed max-w-lg mx-auto font-light italic">
            Arms &amp; Dealt is not affiliated with any actual arms dealing, weapons manufacturing,
            or international incidents. Any resemblance to real organizations is purely a coincidence
            and frankly impressive.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-charcoal border-t border-gold/10 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 text-gold/25 text-base mb-3 select-none">
            <span>♠</span>
            <span className="text-gold/10">|</span>
            <span>♥</span>
            <span className="text-gold/10">|</span>
            <span>♣</span>
            <span className="text-gold/10">|</span>
            <span>♦</span>
          </div>
          <p className="text-offwhite/25 text-xs tracking-wide">
            &copy; Arms &amp; Dealt. All operations confidential. Not responsible for pulled muscles or bad beats.
          </p>
        </div>
      </footer>
    </div>
  )
}
