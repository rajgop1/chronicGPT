import "./Header.css";
import darkLogo from "./logo.png";
import lightLogo from "./logo.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [noBorder, setNoBorder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [invert, setInvert] = useState(false);
  const [noBackground, setNoBackground] = useState(false);
  const [heroMode, setHeroMode] = useState(false); // 👈 NEW

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const invertThreshold = window.innerHeight * 0.50;
    const backgroundThreshold = window.innerHeight * 0.70;
    const heroThreshold = window.innerHeight * 2;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      setInvert(scrollY >= invertThreshold);
      setNoBackground(scrollY >= backgroundThreshold);
      setHeroMode(scrollY >= heroThreshold);

      // 👇 NO BORDER only between 100vh and 200vh
      setNoBorder(scrollY >= vh && scrollY < vh * 3.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={`global-header 
    ${invert ? "invert" : ""} 
    ${noBackground ? "no-background" : ""} 
    ${heroMode ? "hero-header" : ""}
    ${noBorder ? "no-border" : ""}
  `}
    >

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <img src={invert ? lightLogo : darkLogo} alt="logo" className="logos" />

      <nav className="nav-links">
        {/* <NavLink style={{color:"white"}} to="/" end className="nav-item"><span className="gradient-text">✦</span> Home</NavLink> */}
        <NavLink style={{ color: "white" }} className="nav-item">
          <span className="nav-icon gradient-text">✦</span>
          <span className="nav-text" style={{ fontWeight: "700" }}>Home</span>
        </NavLink>

        <NavLink style={{ color: "white" }} to="/trust" className="nav-item">Safeguards</NavLink>
        <NavLink style={{ color: "white" }} to="/journey" className="nav-item">Journey</NavLink>
        <NavLink style={{ color: "white" }} to="/journey" className="nav-item">How it works</NavLink>
      </nav>

      {menuOpen && (
        <nav className="mobile-menu">
          <NavLink style={{ color: "white" }} to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink style={{ color: "white" }} to="/trust" onClick={() => setMenuOpen(false)}>Safeguards</NavLink>
          <NavLink style={{ color: "white" }} to="/journey" onClick={() => setMenuOpen(false)}>How it works</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
