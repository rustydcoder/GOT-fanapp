import React, { Component } from "react";
import { CastCard } from "./CastCard";

class Cast extends Component {
  render() {
    return (
      <main className="got-bg casts">
        <div className="container">
          <div className="cast">
            <CastCard />
          </div>
        </div>
      </main>
    );
  }
}

export default Cast;
