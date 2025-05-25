"use client";
import React, { useEffect, useState } from "react";
import ms from "ms";

export default function StageInfo() {
  const TWO_HOURS = ms("5.1m");
  const FIVE_MINUTES = ms("5m");

  const [timeLeft, setTimeLeft] = useState(TWO_HOURS);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) return 0;
          return prev - 1000;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setIsWarning(timeLeft <= FIVE_MINUTES);
  }, [timeLeft]);

  const formatTime = (milliseconds: number) => {
    const duration = {
      hours: Math.floor(milliseconds / ms("1h")),
      minutes: Math.floor((milliseconds % ms("1h")) / ms("1m")),
      seconds: Math.floor((milliseconds % ms("1m")) / ms("1s")),
    };

    return `${String(duration.hours).padStart(2, "0")}:${String(
      duration.minutes
    ).padStart(2, "0")}:${String(duration.seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-3 bg-card p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div className="border-r border-border pr-4">
          <span className="text-sm font-medium text-muted-foreground block mb-1">
            Timer
          </span>
          <span
            className={`text-lg font-bold ${
              isWarning ? "text-red-500 animate-pulse" : "text-primary"
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
        <div>
          <span className="text-sm font-medium text-muted-foreground block mb-1">
            Current Stage
          </span>
          <span className="text-lg font-bold text-primary">ANALYSIS</span>
        </div>
      </div>
      <div className="mt-1">
        <span className="text-sm font-medium text-muted-foreground block mb-1">
          Next Stage
        </span>
        <span className="text-base font-semibold text-foreground">
          STRUCTURING - 1 hour
        </span>
      </div>
    </div>
  );
}
