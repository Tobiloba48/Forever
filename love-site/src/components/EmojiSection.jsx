import { EMOJIS } from "../data";
import SectionHeader from "./ui/SectionHeader";

function EmojiCard({ emoji, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-[#1c1118] border border-rose-900/20 rounded-2xl
        px-4 py-7 flex flex-col items-center gap-3 cursor-pointer
        hover:border-rose-500/50 hover:-translate-y-1.5 hover:bg-[#221520]
        transition-all duration-300 overflow-hidden font-body"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(232,67,106,.12) 0%, transparent 70%)",
        }}
      />
      <span className="text-4xl leading-none relative z-10">{emoji}</span>
      <span className="text-[10px] tracking-widest uppercase text-neutral-500 text-center leading-snug relative z-10">
        {label}
      </span>
    </button>
  );
}

export default function EmojiSection({ onOpen }) {
  return (
    <section id="interact" className="bg-[#0a0608] relative z-10">
      <div className="max-w-3xl mx-auto px-6 py-28">
        <SectionHeader eyebrow="Interactive" title="Click an emoji" />
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {EMOJIS.map(({ emoji, label, id }) => (
            <EmojiCard key={id} emoji={emoji} label={label} onClick={() => onOpen(id)} />
          ))}
        </div>
      </div>
    </section>
  );
}