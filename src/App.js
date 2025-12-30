import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./Home";
import Trust from "./Trust";
import Journey from "./Journey";
import ScrollToTop from "./ScrolltoTop";
import SmoothScroll from "./SmoothScroll";
import Sample from "./Sample";
import Box10 from "./box10";

function App() {
  useEffect(() => {
  const lenis = new Lenis({
    duration: 1.6,
    easing: (t) => 1 - Math.pow(1 - t, 3.5),
    smoothWheel: true,
    smoothTouch: false,
  });

  let rafId;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, []);


  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/sample" element={<Box10/>}/>
      </Routes>
    </Router>
  );
}

export default App;
