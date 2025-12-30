import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./try.css";
import signup from "./Frame.png";
import img1 from "./Play10.png";
import img4 from "./Play (2).png";
import img5 from "./Play (3).png";
import img6 from "./Play (4).png";
import img2 from "./Play6.png";
import img3 from "./Play (1).png";
import trustImg from "./image 1587.jpg";

function Try() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // smoothness strength
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section>
      
         <div className="ontainer">
      {/* LEFT */}
      
      <div className="left">
        {[
          {
            num: "01",
            title: "Your data stays yours",
            desc:
              "Your health data is encrypted, never sold, and never shared without your permission. You decide what ChronicGPT Inc. can access and what it cannot.",
              img:img1
          },
          {
            num: "02",
            title: "Built for safety first",
            desc:
              "AI Doctor is designed to avoid harmful or risky recommendations. Anything uncertain, unusual, or outside its scope immediately triggers clinician review.",
              img:img2
          },
          {
            num: "03",
            title: "Transparent and in your control",
            desc:
              "You can see what the AI Doctor sees, why it makes a recommendation, and who else can access your data. No black boxes, no hidden decisions.",
              img:img3
          },
          {
            num: "04",
            title: "AI Doctor is medically validated",
            desc:
              "Every AI Doctor is continuously reviewed by licensed physicians. It follows clinical guidelines, double-checks itself, and escalates to a human doctor whenever needed.",
              img:img4
          },
          {
            num: "05",
            title: "Fully compliant with US healthcare laws",
            desc:
              "ChronicGPT Inc complies with HIPAA, tele-health regulations, and all relevant AI-in-health safeguards. You are using a medically governed product, not a hobby experiment.",
              img:img5
          },
          {
            num: "06",
            title: "Human doctors stand behind every action",
            desc:
              "AI Doctor is never alone. It works alongside real physicians who monitor safety, review complex situations, and support your care whenever needed.",
              img:img6
          },
        ].map((item, i) => (
          <article key={i} className={`section r${i + 1}`}>
            <div className="top-row">
              <img src={item.img} className="imges"/>
              <h3>{item.title}</h3>
            </div>
            {/* <div className="gradient" /> */}
            <h6>{item.desc}</h6>
          </article>
        ))}
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="img img1" />
        <div className="img img2" />
        <div className="img img3" />
        <div className="img img4" />
        <div className="img img5" />
        <div className="img img6" />
      </div>
    </div>
    


  <section className="box11">
            <div className="box11-header">
              <h2>Built for Trust</h2>
              <p>We know you can only trust a system that is medically sound, transparent, and accountable. ChronicGPT is built so that your AI Doctor never acts alone. Your human doctor sets your health goals, licensed physicians oversee your progress, and every recommendation your AI Doctor makes is traceable, explainable, and grounded in real clinical reasoning. You are always informed, always in control, and never navigating your health alone.</p>
            </div>
            <div className="box11-divider" />
            <div className="box11-content">
              <div className="box11-image">
                <img src={trustImg} alt="Doctor" />
              </div>
              <div className="box11-text">
                <h3>How we keep you safe</h3>
                <p><strong>Clinical Oversight:</strong>Physicians review your clinical trace and intervene whenever needed.
</p>
                <p><strong>Transparent Decisions:</strong>You always see why your AI Doctor recommended something — no black boxes.</p>
                <p><strong>Your Data Stays Yours:</strong>Fully encrypted, never sold, never shared for ads, and always under your control.</p>
              </div>
            </div>
          </section>
       

    </section>
  );
}

export default Try;
