import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { skills } from "../data";
import ProfilImg from "../assets/Profil.jpg";
import { useLanguage } from "../context/LanguageContext";

function SkillBar({ skill, visible, delay }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible && !animated) {
      const t = setTimeout(() => setAnimated(true), delay * 1000 + 400);
      return () => clearTimeout(t);
    }
  }, [visible, delay, animated]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
        <div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "rgba(244,242,238,0.85)" }}>
            {skill.name}
          </span>
          <span style={{ marginLeft: "10px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(244,242,238,0.3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {skill.cat}
          </span>
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "rgba(244,242,238,0.4)" }}>
          {skill.level}%
        </span>
      </div>
      <div style={{ width: "100%", height: "1px", background: "rgba(244,242,238,0.08)", position: "relative", overflow: "visible" }}>
        <div style={{
          position: "absolute", top: "50%", left: 0,
          height: "1px",
          width: animated ? `${skill.level}%` : "0%",
          background: "#f4f2ee",
          transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
          transform: "translateY(-50%)",
        }}>
          <div style={{
            position: "absolute", right: 0, top: "50%",
            transform: "translate(50%, -50%)",
            width: "5px", height: "5px",
            background: "#f4f2ee", borderRadius: "50%",
            opacity: animated ? 1 : 0,
            transition: "opacity 0.3s 0.8s ease",
          }} />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="about" style={{ padding: "90px 0", background: "#111111" }}>
      {/* max-width container */}
      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 5%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          alignItems: "start",
        }}>
          {/* LEFT: Bio */}
          <div ref={leftRef} style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}>
            <div className="section-label">{t("aboutLabel")}</div>
            <h2 className="section-title" style={{ marginBottom: "28px" }}>
              {t("aboutTitle1")}<br />
              <em style={{ fontStyle: "italic", color: "rgba(244,242,238,0.45)" }}>{t("aboutTitle2")}</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                <span dangerouslySetInnerHTML={{ __html: t("aboutP1") }} />,
                <span dangerouslySetInnerHTML={{ __html: t("aboutP2") }} />,
                <span dangerouslySetInnerHTML={{ __html: t("aboutP3") }} />,
              ].map((text, i) => (
                <p key={i} style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.85,
                  color: "rgba(244,242,238,0.5)",
                  fontFamily: "'Syne', sans-serif",
                  opacity: leftVisible ? 1 : 0,
                  transform: leftVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.8s ${0.2 + i * 0.15}s ease, transform 0.8s ${0.2 + i * 0.15}s ease`,
                }}>
                  {text}
                </p>
              ))}
            </div>

            {/* Profile badge */}
            <div style={{
              marginTop: "36px",
              padding: "20px",
              border: "1px solid rgba(244,242,238,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              opacity: leftVisible ? 1 : 0,
              transition: "opacity 0.8s 0.7s ease",
            }}>
              <div style={{
                width: "56px", height: "56px",
                borderRadius: "50%",
                backgroundImage: `url(${ProfilImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(244,242,238,0.1)",
                flexShrink: 0,
              }} />
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: "3px", color: "#f4f2ee" }}>Indra Bachtiar Zakaria</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(244,242,238,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t("aboutRole")}</div>
              </div>
              <a href="#contact" style={{
                marginLeft: "auto",
                padding: "8px 18px",
                border: "1px solid rgba(244,242,238,0.2)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(244,242,238,0.6)",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.target.style.background = "#f4f2ee"; e.target.style.color = "#0a0a0a"; e.target.style.borderColor = "#f4f2ee"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "rgba(244,242,238,0.6)"; e.target.style.borderColor = "rgba(244,242,238,0.2)"; }}>
                {t("aboutAvailable")}
              </a>
            </div>
          </div>

          {/* RIGHT: Skills */}
          <div ref={rightRef}>
            <div className="section-label" style={{
              opacity: rightVisible ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}>{t("aboutSkills")}</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "18px" }}>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} visible={rightVisible} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section#about > div { padding: 0 48px !important; }
          section#about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          section#about { padding: 70px 0 !important; }
          section#about > div { padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          section#about > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
