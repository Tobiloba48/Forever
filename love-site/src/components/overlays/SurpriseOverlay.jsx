import Overlay from "../ui/Overlay";
import bgPhoto from "../../assets/IMG_4895.jpg" // ← adjust path to where you save the image

export default function SurpriseOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      {/* Full-bleed background photo */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        {/* Dark gradient scrim so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.85) 40%, rgba(0,0,0,.45) 100%)",
          }}
        />
      </div>

      {/* Content sits above the photo */}
      <div className="relative z-10 anim-slideUp text-center max-w-xs w-[90%] font-body">
        <span className="text-7xl block mb-4 anim-floatUp">🎁</span>
        <div className="font-display text-white text-3xl mb-3">
          You're My Favourite Person
        </div>
        <p className="text-neutral-200 text-sm leading-relaxed mb-6">
          This is just a little something I made with all my love — because you
          deserve the whole world, and I'm going to spend forever giving it to
          you. Happy birthday, my love.
        </p>
        <span className="text-3xl block anim-spinSlow">🎉</span>
      </div>
    </Overlay>
  );
}
