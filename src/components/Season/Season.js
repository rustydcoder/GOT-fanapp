import React, { useEffect } from "react";
import { SeasonCard } from "./SeasonCard";

const Season = () => {
  useEffect(() => {
    document.title = "GOT - Season";
  });

  return (
    <main className="got-bg seasons">
      <div className="container">
        <SeasonCard />
      </div>
    </main>
  );
};

export default Season;
