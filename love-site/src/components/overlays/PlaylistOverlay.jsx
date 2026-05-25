import { SPOTIFY_URL } from "../../data";
import Overlay from "../ui/Overlay";

export default function PlaylistOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="anim-slideUp text-center max-w-sm w-[90%] px-4 font-body">
        <div className="text-6xl mb-4">🎶</div>
        <div className="font-script text-[2.2rem] text-pink-400 mb-2">Our Playlist</div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-7">
          8 songs I handpicked — every one reminds me of you, of us,
          of this beautiful thing we have.
        </p>
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#1db954]
            text-[#1db954] rounded-full text-xs tracking-widest uppercase
            hover:bg-[#1db954]/10 transition-colors"
        >
          🎵 Open Forever Starts With You
        </a>
      </div>
    </Overlay>
  );
}