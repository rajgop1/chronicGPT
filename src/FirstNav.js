import "./FirstNav.css";
import logo from "./logod.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import doctor from "./Gemini.png";
import RotatingBadge from "./Rotatingbadge";
import RotatingHeadline from "./RotatingHeadline";
import infoCard from "./doctbox.png";
import Badge from "./badge.png";
import TimedReveal from "./TimedReveal";

function FirstNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState(false); // 👈 NEW

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "ChronicGPT – Your Personal AI Doctor";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      "ChronicGPT is your personal AI doctor helping manage diabetes, hypertension, and weight using real-time clinical insights.";

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://chronicgpt.com/";
  }, []);

  return (
    <div className={`fnav-container ${revealed ? "reveal-done" : ""}`} style={{ paddingInline: "100px", paddingTop: "40px" }}>
      <div className="hero-inner" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div >
          <TimedReveal
            className="hero-text"
            delay={100}
          >
            <RotatingHeadline className="rh" />
          </TimedReveal>
        </div>

        <div className="hero-visual" style={{ position: "relative" }}>
          <div style={{ width: "594px" }}>
            <img src={doctor} alt="Doctor" style={{ margin: "-5px", height: "100%", width: "100%", objectFit: "cover" }} />
          </div>
          <div className="info-card" style={{ position: "absolute", top: "35%", right: "50px" }}>
            <TimedReveal delay={300} className="hero-info float-soft" variant="zoom">
              <div>
                <p> Dr. Sara Mohan</p>
                <p className="doct" >Your AI Doctor</p>
              </div>
            </TimedReveal>
          </div>
        </div>

      </div>

      <TimedReveal delay={500}>
        <p className="ny">
          Now you can have your own AI Doctor that is always on, always <br />yours, and outcome focused
        </p>
      </TimedReveal>
    </div>
  );
}

export default FirstNav;
