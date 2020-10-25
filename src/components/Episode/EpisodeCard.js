import React, { useState } from "react";
import { Link } from "react-router-dom";

const EpisodeCard = (props) => {
  const [index, setIndex] = useState(0);

  const increment = () =>
    index < props.episode.length - 1 && setIndex(index + 1);
  const decrement = () => index > 0 && setIndex(index - 1);
  let i = props.episode[index];

  return (
    <div className="episode-card">
      <div className="card bg-dark text-white">
        <div className="row no-gutter">
          <div className="col-auto grid-display">
            <img
              className="img-fluid"
              src={i.image.medium}
              alt={`Season ${i.season} Ep ${i.number}`}
              width="100%"
            />

            <ul className="episode-card_info p-0 m-3">
              <li>
                <span>
                  <strong>Season</strong>:<small> {i.season}</small>
                </span>
                <span>
                  <strong>Episode</strong>:<small> {i.number}</small>
                </span>
              </li>
              <li>
                <strong>Airdate</strong>:
                <small>
                  {" "}
                  {i.airdate} at {i.airtime}
                </small>
              </li>
              <li>
                <strong>Runtime</strong>:<small> {i.runtime}</small>
              </li>
            </ul>

            <div className="episode-card_btn m-3 text-left">
              <Link
                to={`/season${i.season}/episode${i.number - 1}`}
                onClick={decrement}
                style={{ display: index === 0 ? "none" : "inline-block" }}
                className="btn btn-primary my-0"
              >
                Prev
              </Link>
              <Link
                to={`/season${i.season}/episode${i.number + 1}`}
                onClick={increment}
                style={{
                  display:
                    index === props.episode.length - 1
                      ? "none"
                      : "inline-block",
                }}
                className="btn btn-primary my-0"
              >
                Next
              </Link>
            </div>
          </div>
          <div className="col episode-body text-left">
            <div className="card-body">
              <h4 className="card-title">{i.name}</h4>
              <p className="card-text">
                {i.summary.replace(/(<?\Wp>)|(<br>)/g, "")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EpisodeCard;
