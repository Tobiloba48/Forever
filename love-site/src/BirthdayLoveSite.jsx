import { useState } from "react";

import HeartsCanvas from "./components/HeartsCanvas";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Memories from "./components/Memories";
import EmojiSection from "./components/EmojiSection";
import SpotifySection from "./components/SpotifySection";
import Closing from "./components/Closing";

import HeartOverlay from "./components/overlays/HeartOverlay";
import LetterOverlay from "./components/overlays/LetterOverlay";
import PlaylistOverlay from "./components/overlays/PlaylistOverlay";
import ReasonsOverlay from "./components/overlays/ReasonsOverlay";
import SurpriseOverlay from "./components/overlays/SurpriseOverlay";

/* ── Confetti burst helper ── */
function ConfettiPiece({ style }) {
  const icons = ["❤️", "🌹", "💕", "💖", "✨"];
  return (
    <div className="fixed pointer-events-none z-[999] anim-confetti text-xl" style={style}>
      {icons[Math.floor(Math.random() * icons.length)]}
    </div>
  );
}

export default function BirthdayLoveSite() {
  const [overlay, setOverlay]   = useState(null); // 'heart' | 'letter' | 'playlist' | 'reasons' | 'surprise'
  const [musicOn, setMusicOn]   = useState(false);
  const [confetti, setConfetti] = useState([]);

  function handleFinalSurprise() {
    const pieces = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      style: {
        left:              `${Math.random() * 100}vw`,
        top:               `${50 + Math.random() * 40}vh`,
        fontSize:          `${0.9 + Math.random() * 1.6}rem`,
        animationDuration: `${0.8 + Math.random() * 0.9}s`,
        animationDelay:    `${Math.random() * 0.3}s`,
      },
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 2200);
    setTimeout(() => setOverlay("surprise"), 450);
  }

  return (
    <div className="font-body bg-[#0a0608] text-[#f5e8ec] min-h-screen overflow-x-hidden">

      {/* Ambient layer */}
      <HeartsCanvas />

      {/* Confetti burst */}
      {confetti.map((c) => <ConfettiPiece key={c.id} style={c.style} />)}

      {/* Floating music FAB */}
      <button
        onClick={() => setMusicOn((p) => !p)}
        title="Play our song"
        className="fixed bottom-7 right-7 z-[200] w-12 h-12 rounded-full bg-rose-500
          shadow-[0_4px_24px_rgba(232,67,106,.45)] flex items-center justify-center
          text-xl anim-musicBounce hover:scale-110 transition-transform"
      >
        {musicOn ? "🔊" : "🎵"}
      </button>

      {/* Sections */}
      <Nav musicOn={musicOn} onMusicToggle={() => setMusicOn((p) => !p)} />
      <Hero />
      <Memories />
      <EmojiSection onOpen={setOverlay} />
      <SpotifySection />
      <Closing onFinalSurprise={handleFinalSurprise} />

      {/* Overlays */}
      <HeartOverlay    open={overlay === "heart"}    onClose={() => setOverlay(null)} />
      <LetterOverlay   open={overlay === "letter"}   onClose={() => setOverlay(null)} />
      <PlaylistOverlay open={overlay === "playlist"} onClose={() => setOverlay(null)} />
      <ReasonsOverlay  open={overlay === "reasons"}  onClose={() => setOverlay(null)} />
      <SurpriseOverlay open={overlay === "surprise"} onClose={() => setOverlay(null)} />
    </div>
  );
}