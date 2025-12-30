import "./Navigation.css";
import { useEffect, useState } from "react";
import MD from "./ban1.png";
import YOU from "./ban2.png";
import AID from "./ban3.png";
import ScrollReveal from "./ScrollReveal";
import TimedReveal from "./TimedReveal";
import Reactange from "./Rectangle.png";
import removedai from "./removedai.png";
import removedyou from "./removedyou.png";
import removedmd from "./removedmd.png";
import mdban from "./mdban.png";

function Navigation() {
  const [navStyle, setNavStyle] = useState({
    height: "25vh",
    top: "170vh",
    backgroundPositionY: "100%",
    position: "fixed",
    scale: 1,
  });
  const [showGradient, setShowGradient] = useState(false);
  const [heroStyle, setHeroStyle] = useState({ top: "90%", opacity: 1 });
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
   const onScroll = () => {
  const scrolled = window.scrollY;
  const vh = window.innerHeight;

  let style = {
    top: "0",
    height: "0vh",
    backgroundPositionY: "50%",
    position: "fixed",
    scale: 1,
  };

  let heroTop = 80;
  let heroOpacity = 1;
  let paragraphVisible = false;

  // PHASE 1 — expand 0 → 100vh
  if (scrolled <= 1 * vh) {
    const progress = scrolled / (1 * vh);
    style.height = `${progress * 100}vh`;
    style.top = `${100 - progress * 100}vh`;
    style.gradTop = "0px";

  }

  // PHASE 2 — zoom + reveal
  else if (scrolled <= 3.5 * vh) {
    const zoomProgress = (scrolled - 1 * vh) / (2.5 * vh);
    style.height = "100vh";
    style.top = "0";
    style.scale = 1 + zoomProgress * 0.18;
    paragraphVisible = true;
    style.gradTop = "0px";

  }

  // PHASE 3 — stable
 else if (scrolled <= 10.9 * vh) {
  style.height = "100vh";
  paragraphVisible = false;
  style.top = "0";
  style.scale = 1;
  style.backgroundPositionY = "90%";
  //  style.gradTop = "50%";
}

  
  // PHASE 4 — release
  else {
     paragraphVisible = false;
    style.height = "auto";
    style.top = "0";
    style.position = "relative";
    style.scale = 1;
    style.backgroundPositionY = "25%";
    style.gradTop = "0px";

  }

  setNavStyle(style);
  setHeroStyle({ top: `${heroTop}%`, opacity: heroOpacity });
  setShowParagraph(paragraphVisible);
};

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="nav-spacer" />

    <section
  className="Nav-container"
  style={{
    height: navStyle.height,
    top: navStyle.top,
    position: navStyle.position,
    "--grad-top": navStyle.gradTop || "0px",
  }}
>

        <div
          className="nav-bg"
          style={{
            backgroundPosition: `50% ${navStyle.backgroundPositionY}`,
            transform: `scale(${navStyle.scale})`,
          }}
        />

      {showParagraph && (
  <>
    <ScrollReveal className="md float-soft">
      <img src={removedmd}  />
      
    </ScrollReveal>

    <ScrollReveal className="aid float-soft" >
      <img src={removedai} />
    </ScrollReveal>

    <ScrollReveal className="you float-soft">
      <img src={removedyou}  />
    </ScrollReveal>
  </>
)}


        <div className="hero-content" style={heroStyle}>
          {showParagraph && (
            <>
            <TimedReveal delay={100}>
              <h1 className="h1">Your care with human MD and AI Doctor</h1>
              </TimedReveal>
            <ScrollReveal>   
              <p className="pp" style={{textAlign:"center"}}>
               If you are living with diabetes, hypertension, or weight struggles, you know how unpredictable the numbers can feel — progress one week, setbacks the next, and no clear sense of what actually helps. ChronicGPT changes that. Your human doctor sets your goals, and your personal AI Doctor learns your body in real time — watching your sleep, meals, glucose, activity, and medications to guide you with simple, clinical-grade decisions every day. It turns confusion into clarity, patterns into progress, and setbacks into signals you can finally understand.
              </p>
                </ScrollReveal>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Navigation;
