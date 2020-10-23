import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import Loader from "../../Loader";

const Episode = (props) => {
  const [episode, setEpisode] = useState(null);
  let { season } = useParams();
  let number = parseInt(season.match(/\d/g).join());

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = async () => {
      try {
        let res = await axios.get("http://api.tvmaze.com/shows/82/episodes", {
          cancelToken: source.token,
        });
        let data = _.filter(res.data, ["season", number]);
        setEpisode(data);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Cancelled");
        } else {
          throw e;
        }
      }
    };

    loadData();

    return () => {
      source.cancel();
    };
  }, [number]);

  return (
    <main className="got-bg episode">
      {episode === null ? (
        <Loader />
      ) : (
        <div>
          <div className="text-left m-4">
            <Link to="/seasons" className="btn btn-primary back-btn">
              Back
            </Link>
          </div>

          <EpisodeCard episode={episode} />
        </div>
      )}
    </main>
  );
};

export default Episode;
