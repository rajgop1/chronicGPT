import { useEffect, useState } from "react";
import "./RotatingHeadline.css";

const sentences = [
  "Glucose spike between MD visits?",
  "Regaining weight after a brief loss?",
  "Not meeting your metabolic goals?",
  "Wish you had a doctor always on?",
];

function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cube-wrapper">
      <div
        className="cube-inner"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {sentences.map((text, i) => (
          <div className="cube-face" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RotatingHeadline;
