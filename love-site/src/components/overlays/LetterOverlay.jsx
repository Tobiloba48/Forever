import Overlay from "../ui/Overlay";

export default function LetterOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="anim-slideUp bg-[#fdf8f0] text-[#2a1a14] max-w-lg w-[90%] rounded-2xl p-10 shadow-[0_40px_100px_rgba(0,0,0,.7)]">
        <div
          className="w-12 h-12 rounded-full mx-auto mb-7 flex items-center justify-center text-2xl shadow-[0_4px_24px_rgba(232,67,106,.45)]"
          style={{ background: "linear-gradient(135deg,#e8436a,#9b1d3a)" }}
        >
          💌
        </div>

        {/* ↓ Replace with your personal letter */}
        <p className="font-display italic text-[1.05rem] leading-[1.9] text-[#3a2820]">
          My love,<br /><br />
          Eight years ago, you walked into my life and changed everything.
          Every single day with you has been a gift — your laugh, your warmth,
          the way you make everything feel like home. I fall more in love with you
          every morning I wake up beside you.<br /><br />
          Today is your day, and I want you to know: you are the best thing
          that has ever happened to me. Here's to a hundred more birthdays,
          a thousand more adventures, and a lifetime of choosing each other.<br /><br />
          Happy Birthday, my love.
        </p>

        <p className="font-script text-[2rem] text-right mt-5 text-rose-800">
          Forever yours ♥
        </p>
      </div>
    </Overlay>
  );
}