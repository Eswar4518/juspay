import React from "react";

export default function HeroStat({ title, value, icon }) {
  return (
    <div className="hero-stat">
      <div className="hero-stat__icon">{icon}</div>
      <div className="hero-stat__text">
        <div className="hero-stat__title">{title}</div>
        <div className="hero-stat__value">{value}</div>
      </div>
    </div>
  );
}
