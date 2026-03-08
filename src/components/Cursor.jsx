import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    document.body.classList.add("cursor-active");

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.11;
      ring.current.y += (pos.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf.current = requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener("mousemove", onMove);

    const addHover = (el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    };

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach(addHover);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  const dotStyle = {
    position: "fixed",
    width: "8px",
    height: "8px",
    background: "#f4f2ee",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9999,
    mixBlendMode: "difference",
    transition: "transform 0.1s ease",
  };

  const ringStyle = {
    position: "fixed",
    width: hovered ? "60px" : "36px",
    height: hovered ? "60px" : "36px",
    border: `1px solid ${hovered ? "#f4f2ee" : "rgba(244,242,238,0.5)"}`,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9998,
    transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
}
