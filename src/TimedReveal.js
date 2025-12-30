import { useEffect, useState } from "react";

export default function TimedReveal({ children, delay = 0, className = "" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className={`timed-reveal ${show ? "show" : ""} ${className}`}>
      {children}
    </div>
  );
}
