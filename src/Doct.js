import "./Doct.css";
import doctor from "./doctorimage.png";
import infoCard from "./doctbox.png";
import RotatingHeadline from "./RotatingHeadline";
import RotatingBadge from "./Rotatingbadge";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-text">
          <RotatingHeadline />
          <p>
            Now you can have your own AI Doctor that is always on, always yours and outcome focused
          </p>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <img src={doctor} alt="Doctor" className="hero-doctor" />
          <img src={infoCard} alt="Doctor info" className="hero-info" />
          {/* <RotatingBadge className="hero-badge"/> */}
        </div>

      </div>
    </section>
  );
}
