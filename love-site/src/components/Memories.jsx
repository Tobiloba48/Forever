import { MEMORIES } from "../data";
import SectionHeader from "./ui/SectionHeader";
import MemoryCard from "./ui/MemoryCard";

export default function Memories() {
  return (
    <section id="memories" className="bg-[#120b0e] relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-28">
        <SectionHeader eyebrow="Our Story" title="Our Memories" />

        <div className="relative">
          {/* Horizontal timeline line (desktop only) */}
          <div
            className="absolute top-[calc(50%-1px)] left-0 right-0 h-px hidden md:block"
            style={{
              background:
                "linear-gradient(to right,transparent,#9b1d3a 15%,#e8436a 50%,#9b1d3a 85%,transparent)",
            }}
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2">
            {MEMORIES.map((memory, i) => (
              <MemoryCard key={memory.year} {...memory} delay={i * 100 + 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}