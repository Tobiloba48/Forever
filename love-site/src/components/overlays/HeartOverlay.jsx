import Overlay from "../ui/Overlay";

export default function HeartOverlay({ open, onClose }) {
  return (
    <Overlay open={open} onClose={onClose}>
      <span
        className="anim-popIn select-none"
        style={{
          fontSize: "min(60vw,50vh)",
          filter: "drop-shadow(0 0 80px rgba(232,67,106,.9))",
        }}
      >
        ❤️
      </span>
    </Overlay>
  );
}