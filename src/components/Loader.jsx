import { useState, useEffect } from "react";

export default function Loader({ done }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=counting, 1=reveal, 2=exit

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase(1), 200);
          setTimeout(() => setPhase(2), 800);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "#0a0a0a",
      zIndex: 10000,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: phase === 2 ? "opacity 0.7s ease, visibility 0.7s ease" : "none",
      opacity: phase === 2 ? 0 : 1,
      visibility: phase === 2 ? "hidden" : "visible",
    },
    top: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "50%",
      background: "#0a0a0a",
      transform: phase === 1 || phase === 2 ? "translateY(-100%)" : "translateY(0)",
      transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
    },
    bottom: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "50%",
      background: "#0a0a0a",
      transform: phase === 1 || phase === 2 ? "translateY(100%)" : "translateY(0)",
      transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
    },
    content: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
    },
    name: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(2.5rem, 6vw, 5rem)",
      fontWeight: 900,
      color: "#f4f2ee",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      marginBottom: "40px",
    },
    nameAccent: {
      fontStyle: "italic",
      color: "#888888",
    },
    barTrack: {
      width: "240px",
      height: "1px",
      background: "rgba(244,242,238,0.1)",
      position: "relative",
      overflow: "hidden",
      marginBottom: "20px",
    },
    barFill: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      background: "#f4f2ee",
      width: `${Math.min(progress, 100)}%`,
      transition: "width 0.1s ease",
    },
    counter: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.72rem",
      color: "rgba(244,242,238,0.35)",
      letterSpacing: "0.1em",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.top} />
      <div style={styles.bottom} />
      <div style={styles.content}>
        <div style={styles.name}>
          Dev<span style={styles.nameAccent}>.Studio</span>
        </div>
        <div style={styles.barTrack}>
          <div style={styles.barFill} />
        </div>
        <div style={styles.counter}>
          {String(Math.min(Math.round(progress), 100)).padStart(3, "0")} / 100
        </div>
      </div>
    </div>
  );
}
