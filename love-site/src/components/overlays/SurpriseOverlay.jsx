import Overlay from "../ui/Overlay";

export default function SurpriseOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="anim-slideUp text-center max-w-xs w-[90%] font-body">
        <span className="text-7xl block mb-4 anim-floatUp">🎁</span>
        <div className="font-display text-white text-3xl mb-3">
          You're My Favourite Person
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          This is just a little something I made with all my love — because you deserve
          the whole world, and I'm going to spend forever giving it to you.
          Happy birthday, my love.
        </p>
        {/* Add a gift photo, countdown, or anything else here */}
        <span className="text-3xl block anim-spinSlow">🎉</span>
      </div>
    </Overlay>
  );
}