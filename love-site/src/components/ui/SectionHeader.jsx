export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="h-px w-7 bg-rose-700/50" />
        <span className="text-[10px] tracking-[.25em] uppercase text-rose-500 font-body">
          {eyebrow}
        </span>
        <span className="h-px w-7 bg-rose-700/50" />
      </div>
      <h2
        className="font-display font-light text-white"
        style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
      >
        {title}
      </h2>
    </div>
  );
}