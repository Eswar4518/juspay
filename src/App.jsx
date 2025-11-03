import React from "react";
import LandingHero from "./components/LandingHero";

function App() {
  return (
    <div className="app-container flex">
      <div className="flex-1">
        <main>
          {/* Landing hero is the single full-page section now; dashboard/analytics/settings live inside it */}
          <LandingHero />
        </main>
      </div>
    </div>
  );
}

export default App;
