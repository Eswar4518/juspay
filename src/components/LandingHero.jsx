import React, { useState } from "react";
import "../styles/landing_hero.scss";
import HeroStat from "./HeroStat";
import { dashboardData } from "../utils/data";

const LandingHero = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="landing-hero">
      {/* decorative layers (glows moved into card so colors appear on the card surface) */}

      {/* right-side vertical nav inside the hero (moved into the card so it sticks to the card) */}

      <div className="landing-hero__card">
        {/* brand label (keeps "Juspay Dashboard" on the hero) - logo removed per request */}
        <div className="landing-hero__brand" aria-hidden="false">
          <span className="landing-hero__brand-title">Juspay Dashboard</span>
        </div>
        {/* right-side vertical nav inside the hero card so it visually sticks to the card */}
        <nav
          className="landing-hero__nav-right"
          aria-label="Primary navigation"
        >
          <button
            className={`landing-hero__nav-btn ${
              active === "dashboard" ? "is-active" : ""
            }`}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`landing-hero__nav-btn ${
              active === "analytics" ? "is-active" : ""
            }`}
            onClick={() => setActive("analytics")}
          >
            Analytics
          </button>
          <button
            className={`landing-hero__nav-btn ${
              active === "settings" ? "is-active" : ""
            }`}
            onClick={() => setActive("settings")}
          >
            Settings
          </button>
        </nav>
        {/* ambient glows attached to the card so they render on the card surface */}
        <div className="landing-hero__glow landing-hero__glow--top" />
        <div className="landing-hero__glow landing-hero__glow--bottom" />

        {/* grid/net sits behind the heading inside the card */}
        <div className="landing-hero__grid" aria-hidden="true" />

        <button
          type="button"
          className="landing-hero__badge"
          aria-label="Assignment"
        >
          ASSIGNMENT
        </button>
        <h1 className="landing-hero__title">
          UI DEVELOPER
          <br />
          ASSIGNMENT
        </h1>

        <div className="landing-hero__company">
          <div className="landing-hero__company-label">COMPANY</div>
          <div className="landing-hero__company-name">
            Juspay Technologies Private Limited
          </div>
        </div>

        {/* panel area inside the hero */}
        <div className="landing-hero__panel">
          {active === "dashboard" && (
            <div className="landing-hero__panel-inner">
              <div className="landing-hero__stats">
                {dashboardData.map((item) => (
                  <div className="landing-hero__stat" key={item.title}>
                    <HeroStat
                      title={item.title}
                      value={item.value}
                      icon={item.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "analytics" && (
            <div className="landing-hero__panel-inner">
              <div className="analytics-placeholder">
                Analytics chart placeholder
              </div>
            </div>
          )}

          {active === "settings" && (
            <div className="landing-hero__panel-inner">
              <div className="settings-placeholder">
                Settings / controls placeholder
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
