import { TRACKS, SPOTIFY_URL } from "../data";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionHeader from "./ui/SectionHeader";

export default function SpotifySection() {
  const [ref, visible] = useFadeIn();

  return (
    <section id="spotify" className="bg-[#120b0e] relative z-10">
      <div className="max-w-2xl mx-auto px-6 py-28">
        <SectionHeader eyebrow="Music" title="Our Soundtrack" />

        <div
          ref={ref}
          className="rounded-2xl p-6 md:p-8 border border-[#1db954]/20
            flex flex-col sm:flex-row gap-6 transition-all duration-700"
          style={{
            background: "linear-gradient(135deg,#1a0d14 0%,#0e1a12 100%)",
            boxShadow: "0 0 60px rgba(29,185,84,.07)",
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(32px)",
          }}
        >
          {/* Album art */}
          <div
            className="w-[130px] h-[130px] flex-shrink-0 rounded-xl flex flex-col
              items-center justify-center gap-1 mx-auto sm:mx-0"
            style={{ background: "linear-gradient(135deg,#9b1d3a,#0e1a12)" }}
          >
            <span className="font-script text-pink-400 text-xl text-center leading-snug">
              Forever<br />Starts<br />With You
            </span>
            <span className="text-rose-500 text-sm">♥</span>
          </div>

          {/* Info */}
          <div className="flex-1 font-body">
            <div className="text-[10px] tracking-widest uppercase text-[#1db954] mb-1">
              ● Playlist
            </div>
            <div className="font-display font-light text-2xl text-white mb-1">
              Forever Starts With You
            </div>
            <div className="text-neutral-500 text-xs mb-4 leading-relaxed">
              Songs that remind me of us, and everything I love about you.
            </div>

            {/* Track list */}
            <div className="mb-4">
              {TRACKS.map((t) => (
                <div
                  key={t.n}
                  className="flex items-center gap-3 py-2 border-b border-white/[.04]"
                >
                  <span className="text-[11px] text-neutral-600 w-3 text-right">{t.n}</span>
                  <span className="flex-1 text-[13px] text-white/90">{t.title}</span>
                  <span className="text-[11px] text-neutral-500">{t.artist}</span>
                  <span className="text-[11px] text-neutral-500 min-w-[30px] text-right">{t.dur}</span>
                </div>
              ))}
              <div className="text-[11px] text-neutral-600 mt-2 text-center">… and more</div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-[#1db954] flex items-center justify-center text-sm hover:bg-[#1ed760] hover:scale-105 transition-all">
                ▶
              </button>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 border border-[#1db954]
                  text-[#1db954] rounded-full text-[11px] tracking-widest uppercase
                  hover:bg-[#1db954]/10 transition-colors"
              >
                🎵 Open on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}