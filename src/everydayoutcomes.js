import "./EverydayOutcomes.css";
import image from "./photo.jpg";

export default function EverydayOutcomes() {
  const stats = [
    { value: "15–30%", arrow: "↓", label: "Daily glucose variability" },
    { value: "20–40", arrow: "↑", suffix: "MINS", label: "Better sleep per night" },
    { value: "10–25%", arrow: "↓", label: "Morning BP instability" },
    { value: "2–5", suffix: "FEWER", label: "Daily energy dips" },
  ];

  return (
    <div className="edo-container">
      <section className="eo-wrapper">
        <div className="eo-card">
          <h2 className="eo-title">Everyday Outcomes</h2>

          <div className="eo-content">
            {/* LEFT IMAGE */}
            <div className="eo-image">
              <img src={image} alt="Everyday outcomes visual" />
            </div>

            {/* RIGHT STATS */}
            <div className="eo-stats">
              {stats.map((item, index) => (
                <div className="eo-row" key={index}>
                  <div className="eo-value">
                    {item.value}
                    {item.arrow && (
                      <span className="eo-arrow">{item.arrow}</span>
                    )}
                    {item.suffix && (
                      <span className="eo-suffix">{item.suffix}</span>
                    )}
                  </div>
                  <div className="eo-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <hr className="eo-divider" />
      <section className="tc-wrapper">
  <div className="tc-cta-centered">
    <span className="tc-pill">Limited Spots Available</span>

    <h2>Be part of the first cohort.</h2>

    <p className="tc-desc">
      Get full access, all setup support, and early-user advantages.Get full access, 
      all setup support, and early-user advantages.Get full access, all setup support, 
      and early-user advantages.Get full access, 
    </p>

    <div className="tc-divider"></div>

    <button className="tc-button">Join first cohort</button>

    <small className="tc-note">
      Takes less than 30 seconds. No commitment required.
    </small>
  </div>
</section>
    </div>
  );
}
