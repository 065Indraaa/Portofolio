import { useEffect, useRef, useState } from "react";
import ProfilImg from "../assets/Profil.jpg";
import { useLanguage } from "../context/LanguageContext";

const marqueeItems = ["React", "Vue.js", "Node.js", "Flutter", "Electron", "Next.js", "PostgreSQL", "TypeScript", "React Native", "AWS", "Docker", "Figma", "GraphQL", "Firebase"];

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const gridSize = 50;

      ctx.strokeStyle = "rgba(244,242,238,0.04)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      for (let x = 0; x <= W; x += gridSize) {
        for (let y = 0; y <= H; y += gridSize) {
          const dist = Math.sqrt((x - W * 0.7) ** 2 + (y - H * 0.4) ** 2);
          const wave = Math.sin(dist * 0.02 - time * 2) * 0.5 + 0.5;
          const opacity = wave * 0.35;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(244,242,238,${opacity})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const marqueeContent = [...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "36px", padding: "0 36px", fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,242,238,0.5)", whiteSpace: "nowrap" }}>
      {item}
      <span style={{ width: "4px", height: "4px", background: "rgba(244,242,238,0.2)", borderRadius: "50%", display: "inline-block" }} />
    </span>
  ));

  return (
    <section id="hero" style={{ paddingTop: "140px", paddingBottom: "30px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 40%, rgba(244,242,238,0.04) 0%, transparent 60%)" }} />

      {/* Main content — constrained max width, 2 columns */}
      <div className="hero-grid" style={{
        position: "relative", zIndex: 2,
        width: "100%",
        maxWidth: "1536px",
        margin: "0 auto",
        padding: "40px 5% 60px",
        display: "grid",
        gridTemplateColumns: "1.3fr 0.9fr",
        gap: "60px",
        alignItems: "center"
      }}>

        {/* LEFT COLUMN */}
        <div>
          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: "14px",
            fontFamily: "'DM Mono', monospace", fontSize: "0.85rem",
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(244,242,238,0.4)", marginBottom: "24px",
            opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease",
          }}>
            <span style={{ width: "36px", height: "1px", background: "rgba(244,242,238,0.3)", display: "inline-block" }} />
            {t("heroEyebrow")}
          </div>

          {/* Main headline */}
          <div style={{ overflow: "hidden", marginBottom: "6px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#f4f2ee",
              transform: mounted ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}>
              {t("heroTitle1")}
            </h1>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "6px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(244,242,238,0.6)",
              transform: mounted ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s 0.45s cubic-bezier(0.16,1,0.3,1)",
            }}>
              {t("heroTitle2")}
            </h1>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "40px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#f4f2ee",
              transform: mounted ? "translateY(0)" : "translateY(100%)",
              transition: "transform 1s 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}>
              {t("heroTitle3")}
            </h1>
          </div>

          {/* Sub + CTA row */}
          <div style={{
            display: "flex", gap: "40px", alignItems: "flex-start", flexWrap: "wrap",
            opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s 0.9s ease, transform 0.9s 0.9s ease",
          }}>
            <p style={{
              maxWidth: "480px", fontSize: "1.1rem", lineHeight: 1.85,
              color: "rgba(244,242,238,0.5)", fontFamily: "'Syne', sans-serif", fontWeight: 400,
            }}>
              {t("heroDesc")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="#projects" style={{
                display: "inline-block",
                padding: "13px 28px",
                background: "#f4f2ee",
                color: "#0a0a0a",
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.target.style.background = "rgba(244,242,238,0.85)"; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.background = "#f4f2ee"; e.target.style.transform = "none"; }}>
                {t("heroCtaProj")}
              </a>
              <a href="#contact" style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "rgba(244,242,238,0.45)",
                letterSpacing: "0.05em",
                transition: "color 0.3s",
                display: "flex", alignItems: "center", gap: "8px",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#f4f2ee"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(244,242,238,0.45)"}>
                {t("heroCtaContact")}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & Stats */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1) translateY(0)" : "scale(0.95) translateY(30px)",
          transition: "opacity 1s 0.5s ease, transform 1s 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {/* Animated floating frame */}
          <div ref={imageRef} className="hero-image-container" style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            aspectRatio: "3/4",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            border: "1px solid rgba(244,242,238,0.08)",
            animation: "floating 6s ease-in-out infinite"
          }}>
            {/* Overlay glow */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.9) 100%)",
              zIndex: 1,
              pointerEvents: "none"
            }} />

            <img
              src={ProfilImg}
              alt="Indra Bachtiar Zakaria"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />

            {/* Inline floating stat badge */}
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              zIndex: 2,
              background: "rgba(20,20,20,0.55)",
              backdropFilter: "blur(10px)",
              padding: "12px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(244,242,238,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80" }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#f4f2ee", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t("heroBadge")}</div>
            </div>
          </div>

          {/* Stats below image */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "380px",
            marginTop: "32px",
            padding: "20px 0",
            borderTop: "1px solid rgba(244,242,238,0.08)",
          }} className="hero-stats">
            {[{ n: "1", sup: "+", label: t("heroStat1") }, { n: "4", sup: "smtr", label: t("heroStat2") }, { n: "5", sup: "+", label: t("heroStat3") }].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#f4f2ee" }}>
                  {s.n}<sup style={{ fontSize: "0.9rem", verticalAlign: "super", color: "rgba(244,242,238,0.45)" }}>{s.sup}</sup>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.3)", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Explore indicator */}
      <div style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(244,242,238,0.35)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.9s 1.4s ease",
        marginBottom: "40px",
        cursor: "pointer"
      }} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
        {t("heroExplore")}
        <div style={{ width: "1px", height: "40px", background: "rgba(244,242,238,0.1)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, width: "100%", height: "50%", background: "rgba(244,242,238,0.6)", animation: "sdown 2s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Marquee */}
      <div style={{
        position: "relative", zIndex: 2,
        borderTop: "1px solid rgba(244,242,238,0.06)",
        borderBottom: "1px solid rgba(244,242,238,0.06)",
        padding: "14px 0",
        overflow: "hidden",
      }}>
        <div style={{ display: "inline-flex", animation: "marquee 30s linear infinite", whiteSpace: "nowrap" }}>
          {marqueeContent}
        </div>
      </div>

      <style>{`
        @keyframes sdown { 0%{top:-100%} 100%{top:200%} }
        @keyframes floating { 0%{transform: translateY(0px)} 50%{transform: translateY(-8px)} 100%{transform: translateY(0px)} }
        
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-grid > div:first-child > div { justify-content: center; text-align: center; }
          .hero-grid > div:first-child p { margin: 0 auto; text-align: center; }
        }
        @media (max-width: 768px) {
          section#hero > div.hero-grid { padding: 40px 28px 50px !important; }
        }
        @media (max-width: 480px) {
          section#hero > div.hero-grid { padding: 30px 20px 44px !important; }
          .hero-stats { gap: 10px; }
        }
      `}</style>
    </section>
  );
}
