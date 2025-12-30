import "./sample.css";
import { useEffect, useRef } from "react";

import yd1 from "./yd1.png";
import yd2 from "./yd2.png";
import yd3 from "./yd3.png";
import yd4 from "./yd4.png";
import yd5 from "./yd5.png";
import yd6 from "./yd6.png";

const data = [
  { text: "Paragraph 1", img: yd1, className: "box1" },
  { text: "Paragraph 2", img: yd2, className: "box2" },
  { text: "Paragraph 3", img: yd3, className: "box3" },
  { text: "Paragraph 4", img: yd4, className: "box4" },
  { text: "Paragraph 5", img: yd5, className: "box5" },
  { text: "Paragraph 6", img: yd6, className: "box6" },
];

function Sample() {

  return (
    <div className="sample-boxes">
      {/* <div className="sg-header sample-title" >
            <h2>Safeguards you deserve</h2>
            <p>// Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.</p>
          </div> */}

      {data.map((item, i) => (
        <div
          key={i}
          className={`box ${item.className}`}
        >
          <div className="sample-left">
            <p>{item.text}</p>
          </div>
          <div className="sample-right">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sample;
