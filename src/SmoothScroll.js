import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const current = useRef(0);
  const target = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      target.current = window.scrollY;
    };

    const animate = () => {
      const ease = 0.08; // lower = smoother
      current.current += (target.current - current.current) * ease;

      document.body.style.transform = `translateY(${-current.current}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    raf.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      document.body.style.transform = "";
    };
  }, []);

  return children;
}
