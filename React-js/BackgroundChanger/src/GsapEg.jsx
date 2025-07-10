import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MyComponent() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        ref={boxRef}
        className="text-white text-2xl p-6 bg-blue-500 rounded-xl shadow-lg"
      >
        🎉 Hello GSAP + React!
      </div>
    </div>
  );
}

export default MyComponent;
