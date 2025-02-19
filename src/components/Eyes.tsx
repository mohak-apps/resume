import { useState, useEffect, useCallback } from "react";

interface EyeProps {
  size?: number;
  pupilSize?: number;
  bgColor?: string;
  pupilColor?: string;
}

const Eye: React.FC<EyeProps> = ({
  size = 120,
  pupilSize = 45,
  bgColor = "#fff",
  pupilColor = "#000",
}) => {
  const [pupilPosition, setPupilPosition] = useState({
    x: 0,
    y: 0,
  });

  // Calculate pupil position based on mouse movement
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const eye = document.querySelector(".eye");
    const pupil = document.querySelector(".pupil");

    if (!eye || !pupil) return;

    const eyeRect = eye.getBoundingClientRect();
    const pupilRect = pupil.getBoundingClientRect();

    // Calculate the center of the eye
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate the mouse position relative to the eye center
    const mouseX = event.clientX - eyeCenterX;
    const mouseY = event.clientY - eyeCenterY;

    // Calculate the angle between the mouse and the eye center
    const angle = Math.atan2(mouseY, mouseX);

    // Calculate the maximum distance the pupil can move
    const maxDistance = (eyeRect.width - pupilRect.width) / 2;

    // Calculate the new pupil position
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    // Update the pupil position
    setPupilPosition({ x: pupilX - pupilSize / 2, y: pupilY - pupilSize / 2 });
  }, []);

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      <div
        className="eye"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: bgColor,
        }}
      >
        <div>"404 Error: Boring Code Not Found"</div>
        <div
          className="pupil absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: `${pupilSize}px`,
            height: `${pupilSize}px`,
            backgroundColor: pupilColor,
            transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
            transition: "transform 0.05s linear",
          }}
        />
      </div>
    </>
  );
};

export default Eye;
