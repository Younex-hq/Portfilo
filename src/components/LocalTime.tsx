import { useEffect, useState, memo } from "react";

// Formatter instance declared outside component to avoid reallocation on re-renders
const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Africa/Algiers", // Permanent UTC+1 (no DST adjustments)
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

interface LocalTimeProps {
  className?: string;
}

export const LocalTime = memo(function LocalTime({
  className = "",
}: LocalTimeProps) {
  // Initialize state immediately to avoid empty layout flashes
  const [time, setTime] = useState(() => timeFormatter.format(new Date()));

  useEffect(() => {
    const updateTime = () => {
      setTime(timeFormatter.format(new Date()));
    };

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span className={className}>{time}</span>;
});
