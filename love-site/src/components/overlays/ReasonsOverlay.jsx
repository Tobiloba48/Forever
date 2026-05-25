import { REASONS } from "../../data";
import Overlay from "../ui/Overlay";

export default function ReasonsOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div
        className="anim-slideUp bg-[#1c1118] border border-rose-900/25 rounded-2xl
          p-8 max-w-lg w-[90%] max-h-[78vh] overflow-y-auto font-body"
      >
        <div className="font-script text-[2rem] text-pink-400 text-center mb-5">
          20 Reasons I Love You
        </div>
        {REASONS.map((reason, i) => (
          <div
            key={i}
            className="flex gap-3 py-2.5 border-b border-white/[.05] items-start"
          >
            <span className="font-display text-rose-400 text-lg min-w-[22px] leading-snug">
              {i + 1}.
            </span>
            <span className="text-neutral-400 text-sm leading-relaxed">{reason}</span>
          </div>
        ))}
      </div>
    </Overlay>
  );
}