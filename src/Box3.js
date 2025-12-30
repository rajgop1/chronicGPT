import "./box3.css";
import sampleImg from "./sscht.png";

export default function Box3() {
  return (
    /* ✅ Semantic section */
    <section
      className="box3-container"
      aria-labelledby="trust-heading"
    >
      {/* LEFT SIDE (visual support) */}
      <div className="box3-left">
        <img
          src={sampleImg}
          alt="Clinical oversight and AI health safety workflow illustration"
          loading="lazy"
        />
      </div>

      {/* RIGHT SIDE (content) */}
      <div className="box3-right">
        {/* ✅ Proper heading for section */}
        <h2 id="trust-heading">Built for Trust</h2>

        <p>
          We know you can only trust a system that is medically sound,
          transparent, and accountable. ChronicGPT is built so that your
          AI Doctor never acts alone. Your human doctor sets your health
          goals, licensed physicians oversee your progress, and every
          recommendation your AI Doctor makes is traceable, explainable,
          and grounded in real clinical reasoning. You are always informed,
          always in control, and never navigating your health alone.
        </p>

        {/* ✅ Subheading hierarchy fixed */}
        <h4>How we keep you safe</h4>

        {/* ✅ Convert repeated paragraphs into a list (SEO + clarity) */}
        <ul>
          <li>
            <strong>Clinical oversight:</strong> Physicians review your
            clinical trace and intervene whenever needed.
          </li>
          <li>
            <strong>Transparent decisions:</strong> You always see why
            your AI Doctor recommended something — no black boxes.
          </li>
          <li>
            <strong>Your data stays yours:</strong> Fully encrypted, never
            sold, never shared for ads, and always under your control.
          </li>
        </ul>
      </div>
    </section>
  );
}
