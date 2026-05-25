import Pic2026 from '../assets/2026.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-[10vh] pl-[6vw] overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%,rgba(155,29,58,.38) 0%,transparent 60%), radial-gradient(ellipse 55% 75% at 25% 75%,rgba(232,67,106,.14) 0%,transparent 55%), linear-gradient(155deg,#1a0810 0%,#0a0608 60%,#160c0e 100%)",
        }}
      />

      {/* Drifting emoji hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute anim-drift select-none"
            style={{
              left:              `${Math.random() * 100}%`,
              fontSize:          `${1 + Math.random() * 2}rem`,
              animationDuration: `${5 + Math.random() * 8}s`,
              animationDelay:    `${Math.random() * 8}s`,
              opacity:           0,
            }}
          >
            {["❤️","💕","💖","🌹","💗"][i % 5]}
          </div>
        ))}
      </div>

      {/* Right photo slot */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[58%] overflow-hidden"
        style={{ background: "linear-gradient(to right,#0a0608 0%,transparent 22%)" }}
      >
        {/*
          Replace this div with your photo:
          <img src="couple.jpg" className="w-full h-full object-cover opacity-55"
               style={{ filter: "sepia(.35) saturate(1.2)" }} />
        */}
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[10px] tracking-[.2em] uppercase text-white/20 border border-dashed border-white/10 px-4 py-2 rounded font-body">
<img src={Pic2026} alt="" />          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-[10px] tracking-[.3em] uppercase text-pink-400 mb-4 font-body">
          Happy Birthday
        </p>
        <h1
          className="font-display font-light leading-[1.04]"
          style={{ fontSize: "clamp(3.4rem,9vw,6.8rem)" }}
        >
          My Love
        </h1>
        <span
          className="font-script text-rose-500 block"
          style={{ fontSize: "clamp(2.6rem,7vw,5.2rem)" }}
        >
          forever &amp; always
        </span>
        <p className="text-neutral-400 font-light mt-5 mb-8 text-base md:text-lg tracking-wide font-body">
          <strong className="text-[#f5e8ec] font-normal">8 years later…</strong>{" "}
          and it's still you.
        </p>
        <a
          href="#memories"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-rose-500/40
            rounded-full bg-rose-500/10 backdrop-blur-sm text-[11px] tracking-widest
            uppercase hover:bg-rose-500/22 hover:border-rose-400 hover:-translate-y-0.5
            transition-all duration-300 font-body text-[#f5e8ec]"
        >
          Start Our Journey{" "}
          <span className="anim-heartbeat text-rose-400">♥</span>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-600 z-10 anim-floatUp font-body">
        <span className="text-[9px] tracking-[.2em] uppercase">Scroll</span>
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
          <path
            d="M7 1v12M1 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}