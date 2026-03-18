"use client";

import { useEffect, useState } from "react";

type Intensity = "subtle" | "balanced" | "intense";

const STORAGE_KEY = "tech-intensity";

const options: { value: Intensity; label: string }[] = [
  { value: "subtle", label: "Sutil" },
  { value: "balanced", label: "Balanceado" },
  { value: "intense", label: "Intenso" },
];

export function IntensityToggle() {
  const [intensity, setIntensity] = useState<Intensity>("balanced");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Intensity | null;
    const value: Intensity = saved && options.some((o) => o.value === saved) ? saved : "balanced";
    setIntensity(value);
    document.documentElement.setAttribute("data-tech-intensity", value);
  }, []);

  const handleChange = (value: Intensity) => {
    setIntensity(value);
    document.documentElement.setAttribute("data-tech-intensity", value);
    window.localStorage.setItem(STORAGE_KEY, value);
  };

  return (
    <div className="intensity-toggle print:hidden" aria-label="Intensidade de animação">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleChange(opt.value)}
          className={intensity === opt.value ? "active" : ""}
          type="button"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

