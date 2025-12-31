import "./sample.css";
import { useEffect, useRef } from "react";

import yd1 from "./yd1.png";
import yd2 from "./yd2.png";
import yd3 from "./yd3.png";
import yd4 from "./yd4.png";
import yd5 from "./yd5.png";
import yd6 from "./yd6.png";
import img4 from "./Play (2).png";
import img5 from "./Play (3).png";
import img6 from "./Play (4).png";
import img2 from "./Play6.png";
import img3 from "./Play (1).png";
import img1 from "./Play10.png";

const data = [
  {
    text: "Paragraph 1", img: yd1, className: "box1", im: img1, title: "Your data stays yours",
    desc:
      "Your health data is encrypted, never sold, and never shared without your permission. You decide what ChronicGPT Inc. can access and what it cannot.",
  },
  {
    text: "Paragraph 2", img: yd2, className: "box2", im: img2, title: "Built for safety first",
    desc:
      "AI Doctor is designed to avoid harmful or risky recommendations. Anything uncertain, unusual, or outside its scope immediately triggers clinician review.",
  },
  {
    text: "Paragraph 3", img: yd3, className: "box3", im: img3, title: "Transparent and in your control",
    desc:
      "You can see what the AI Doctor sees, why it makes a recommendation, and who else can access your data. No black boxes, no hidden decisions.",
  },
  {
    text: "Paragraph 4", img: yd4, className: "box4", im: img4, title: "AI Doctor is medically validated",
    desc:
      "Every AI Doctor is continuously reviewed by licensed physicians. It follows clinical guidelines, double-checks itself, and escalates to a human doctor whenever needed.",
  },
  {
    text: "Paragraph 5", img: yd5, className: "box5", im: img5, title: "Fully compliant with US healthcare laws",
    desc:
      "ChronicGPT Inc complies with HIPAA, tele-health regulations, and all relevant AI-in-health safeguards. You are using a medically governed product, not a hobby experiment.",
  },
  {
    text: "Paragraph 6", img: yd6, className: "box6", im: img6, title: "Human doctors stand behind every action",
    desc:
      "AI Doctor is never alone. It works alongside real physicians who monitor safety, review complex situations, and support your care whenever needed.",
  },
];

function Sample() {

  return (
    <div className="sample-boxes">
      <div className="sample-title-wrapper">
        <div className="sg-header sample-title">
          <h2>Safeguards you deserve</h2>
          <p> Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.</p>
        </div>
      </div>

      {data.map((item, i) => (
        <div
          key={i}
          className={`box ${item.className}`}
          style={{ padding: "32px" }}
        >
          <div className="sample-left" style={{gap: "20px"}}>
            <div className="sample-left-small" style={{ gap: "20px" }}>
              <div style={{ width: "80px", height: "80px" }}>
                <img src={item.im} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div >
                <p>{item.title}</p>
              </div>
            </div>
            <p className="desc">{item.desc}</p>
          </div>
          <div className="sample-right">
            <div style={{ width: "100%" }}>
              <img src={item.img} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sample;
