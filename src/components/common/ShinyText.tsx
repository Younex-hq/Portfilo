import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // 1. Setup and handle the core animation loop
  useEffect(() => {
    if (!textRef.current) return;

    const startPos = direction === "left" ? "150%" : "-50%";
    const endPos = direction === "left" ? "-50%" : "150%";

    tweenRef.current = gsap.fromTo(
      textRef.current,
      { backgroundPositionX: startPos },
      {
        backgroundPositionX: endPos,
        duration: speed,
        ease: "none", // linear transition, same as original
        repeat: -1, // infinite loop
        yoyo: yoyo,
        repeatDelay: delay,
        paused: disabled,
      },
    );

    // Cleanup animation on unmount or prop dependency changes
    return () => {
      tweenRef.current?.kill();
    };
  }, [direction, speed, yoyo, delay]); // We omit `disabled` to prevent restarting the animation

  // 2. Handle toggling the disabled state without resetting animation progress
  useEffect(() => {
    if (!tweenRef.current) return;
    disabled ? tweenRef.current.pause() : tweenRef.current.play();
  }, [disabled]);

  // 3. Mouse interaction handlers
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && tweenRef.current) {
      tweenRef.current.pause();
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && tweenRef.current && !disabled) {
      tweenRef.current.play();
    }
  }, [pauseOnHover, disabled]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: "200% auto",
    backgroundPositionY: "center", // Fixes the Y axis since GSAP is only animating X
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <span
      ref={textRef}
      className={`inline-block ${className}`}
      style={gradientStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default ShinyText;
