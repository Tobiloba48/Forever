export default function Nav({ musicOn, onMusicToggle }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-8 py-5"
      style={{
        background: "linear-gradient(to bottom, rgba(10,6,8,.88) 0%, transparent 100%)",
      }}
    >
      <span className="font-script text-pink-400 text-2xl">For You ♥</span>

      <label className="flex items-center gap-2 cursor-pointer select-none">
        <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-body">
          Play our song
        </span>
        <div
          onClick={onMusicToggle}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
            musicOn ? "bg-rose-500" : "bg-rose-900"
          }`}
        >
          <div
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
              musicOn ? "translate-x-5" : ""
            }`}
          />
        </div>
      </label>
    </nav>
  );
}