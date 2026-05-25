export default function Closing({ onFinalSurprise }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-[#0a0608] z-10">
      {/* Drifting hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-500 anim-drift"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${0.55 + Math.random() * 0.75}rem`,
              animationDuration: `${6 + Math.random() * 9}s`,
              animationDelay: `${Math.random() * 7}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 88%,rgba(155,29,58,.42) 0%,transparent 60%)",
        }}
      />

      <p className="text-[10px] tracking-[.3em] uppercase text-neutral-500 mb-8 font-body relative z-10">
        Always &amp; Forever
      </p>

      <h2
        className="font-display font-light relative z-10"
        style={{ fontSize: "clamp(2.4rem,8vw,5.2rem)", lineHeight: 1.15 }}
      >
        In every lifetime,<br />
        I'd still{" "}
        <span
          className="font-script text-rose-500"
          style={{ fontSize: "clamp(2.8rem,9vw,6rem)" }}
        >
          choose you.
        </span>
      </h2>

      <p className="text-neutral-500 font-light max-w-xs mt-7 mb-10 leading-relaxed text-sm md:text-base font-body relative z-10">
        You are my favourite adventure,<br />
        my greatest love story, and my home.
      </p>

      <button
        onClick={onFinalSurprise}
        className="relative z-10 inline-flex items-center gap-2 px-9 py-4 rounded-full
          text-white font-body text-[11px] tracking-widest uppercase
          hover:-translate-y-1 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg,#e8436a,#9b1d3a)",
          boxShadow: "0 8px 40px rgba(232,67,106,.38)",
        }}
      >
        One last click ♥
      </button>
    </section>
  );
}
