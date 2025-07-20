import React, { useEffect, useRef, useState } from "react";

function AnimatedSection({ children, id }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      } scroll-mt-20`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;