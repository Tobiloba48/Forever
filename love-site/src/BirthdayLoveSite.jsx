import { useState, useRef, useEffect } from "react";

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

// ── Replace this with your real Cloudinary (or any direct) MP3 URL ──
const SONG_URL = "https://res.cloudinary.com/dsiv18gva/video/upload/v1779714404/song_hhpxfb.mp3";

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
  const [overlay, setOverlay]   = useState(null);
  const [musicOn, setMusicOn]   = useState(false);
  const [confetti, setConfetti] = useState([]);
  const audioRef                = useRef(null);

  // Set up audio on mount, clean up on unmount
  useEffect(() => {
    const audio = new Audio(SONG_URL);
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  function handleMusicToggle() {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay — user must interact first, which they did
      });
    }
    setMusicOn((p) => !p);
  }

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

      {/* Ambient floating hearts */}
      <HeartsCanvas />

      {/* Confetti burst */}
      {confetti.map((c) => (
        <ConfettiPiece key={c.id} style={c.style} />
      ))}

      {/* Floating music FAB */}
      <button
        onClick={handleMusicToggle}
        title="Play our song"
        className="fixed bottom-7 right-7 z-[200] w-12 h-12 rounded-full bg-rose-500
          shadow-[0_4px_24px_rgba(232,67,106,.45)] flex items-center justify-center
          text-xl anim-musicBounce hover:scale-110 transition-transform"
      >
        {musicOn ? "🔊" : "🎵"}
      </button>

      {/* Page sections */}
      <Nav musicOn={musicOn} onMusicToggle={handleMusicToggle} />
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