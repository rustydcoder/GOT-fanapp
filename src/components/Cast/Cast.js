import React, { Component } from "react";
import { CastCard } from "./CastCard";

class Cast extends Component {
  componentDidMount() {
    document.title = "GOT - Cast"
  }

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
