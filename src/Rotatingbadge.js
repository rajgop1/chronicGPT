import "./RotatingBadge.css";
import logo from "./logod.png"; // center logo image

function RotatingBadge() {
  return (
    <div className="rb-container">
      {/* Rotating circular text */}
      <div className="rb-text-rotator">
        <svg viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -75, 0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0
              "
            />
          </defs>

          <text>
            <textPath href="#circlePath">
              CHRONIC AI - ENDOCRINOLOGIST -
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center white circle */}
      <div className="rb-center">
        <img src={logo} alt="AI Logo" />
      </div>
    </div>
  );
}

export default RotatingBadge;
