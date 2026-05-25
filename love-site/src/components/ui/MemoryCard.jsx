import { useFadeIn } from "../../hooks/useFadeIn";


export default function MemoryCard({ year, caption, bg, img, delay = 0 }) {  const [ref, visible] = useFadeIn();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 text-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Photo slot — replace inner div with <img src="..." className="w-full h-full object-cover" /> */}
      <div
        className={`w-[108px] h-[130px] rounded-xl bg-gradient-to-br ${bg}
          border border-rose-900/30 flex items-center justify-center
          cursor-pointer hover:border-rose-500/60 hover:scale-105
          transition-all duration-300 overflow-hidden`}
      >
          {img
    ? <img src={img} alt={year} className="w-full h-full object-cover" />
    : <span className="text-[10px] tracking-widest uppercase text-white/20 font-body">{year} Photo</span>
  }
      </div>

      <div className="w-5 h-5 rounded-full border-2 border-rose-500 bg-[#120b0e] flex items-center justify-center text-rose-500 text-xs">
        ♥
      </div>
      <div className="font-display text-rose-400 text-xl">{year}</div>
      <div className="font-body text-[11px] text-neutral-500 leading-snug max-w-[100px]">
        {caption}
      </div>
    </div>
  );
}