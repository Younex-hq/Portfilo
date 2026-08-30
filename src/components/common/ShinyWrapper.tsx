import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ShinyWrapperProps {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shineColor?: string;
  baseColor?: string;
  angle?: number; // Added angle prop
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  delay?: number;
  blendMode?: React.CSSProperties["mixBlendMode"];
}

const ShinyWrapper: React.FC<ShinyWrapperProps> = ({
  children,
  disabled = false,
  speed = 2,
  className = "",
  shineColor = "rgba(255, 255, 255, 0.05)",
  baseColor = "transparent",
  angle = 120, // Default angle is 120 degrees
  spread = 30, // We can now use spread for how wide the beam is (percentage)
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
  blendMode = "normal",
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // 1. Setup the core animation loop with automatic cleanup
  const { contextSafe } = useGSAP(
    () => {
      if (!overlayRef.current) return;

      const startPos = direction === "left" ? "150%" : "-50%";
      const endPos = direction === "left" ? "-50%" : "150%";

      tweenRef.current = gsap.fromTo(
        overlayRef.current,
        { backgroundPositionX: startPos },
        {
          backgroundPositionX: endPos,
          duration: speed,
          ease: "none",
          repeat: -1,
          yoyo: yoyo,
          repeatDelay: delay,
          paused: disabled, // Initial state
        },
      );
    },
    { dependencies: [direction, speed, yoyo, delay] },
  );

  // 2. Handle toggling the disabled state without resetting progress
  useGSAP(
    () => {
      if (!tweenRef.current) return;
      disabled ? tweenRef.current.pause() : tweenRef.current.play();
    },
    { dependencies: [disabled] },
  );

  // 3. Mouse interaction handlers wrapped in contextSafe for best practices
  const handleMouseEnter = contextSafe(() => {
    if (pauseOnHover && tweenRef.current) {
      tweenRef.current.pause();
    }
  });

  const handleMouseLeave = contextSafe(() => {
    if (pauseOnHover && tweenRef.current && !disabled) {
      tweenRef.current.play();
    }
  });

  // Calculate the color stops based on the spread prop (e.g., if spread is 30, beam starts at 35% and ends at 65%)
  const startStop = 50 - spread / 2;
  const endStop = 50 + spread / 2;

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    // Used the new angle prop here, and applied the spread math to the color stops
    backgroundImage: `linear-gradient(${angle}deg, ${baseColor} 0%, ${baseColor} ${startStop}%, ${shineColor} 50%, ${baseColor} ${endStop}%, ${baseColor} 100%)`,
    backgroundSize: "200% 100%",
    backgroundPositionY: "center",
    mixBlendMode: blendMode,
    zIndex: 10,
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div ref={overlayRef} style={overlayStyle} />
    </div>
  );
};

export default ShinyWrapper;
