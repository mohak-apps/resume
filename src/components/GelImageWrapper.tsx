import React, { useRef, useEffect, cloneElement } from "react";

const GelImageWrapper = ({ children, width = "w-72", height = "h-48" }) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const maxDistance = 0.3; // Maximum distance from edge to trigger effect
      const strength = 15; // Maximum strength of the effect

      let rotateX = 0;
      let rotateY = 0;

      if (x < maxDistance)
        rotateY = (strength * (maxDistance - x)) / maxDistance;
      if (x > 1 - maxDistance)
        rotateY = (-strength * (x - (1 - maxDistance))) / maxDistance;
      if (y < maxDistance)
        rotateX = (-strength * (maxDistance - y)) / maxDistance;
      if (y > 1 - maxDistance)
        rotateX = (strength * (y - (1 - maxDistance))) / maxDistance;

      image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "none";
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Clone the child image element and add a ref to it
  const childrenWithRef = cloneElement(children, {
    ref: imageRef,
    className: `w-full h-full object-cover transition-transform duration-300 ease-out ${
      children.props.className || ""
    }`,
  });

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden rounded-lg ${width} ${height}`}
    >
      {childrenWithRef}
    </div>
  );
};

export default GelImageWrapper;
