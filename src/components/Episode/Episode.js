import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Link, useParams, useRouteMatch, Redirect } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import Loader from "../Loader";

const Episode = (props) => {
  const [episode, setEpisode] = useState(null);
  let { season, ep } = useParams();
  let number = parseInt(season.match(/\d+/g).join());
  let epNum = ep && parseInt(ep.match(/\d+/g).join());
  let { url } = useRouteMatch();
  let path = `/season${number}/episode${epNum}`;
  const matchedPath = url === path || !ep ? true : false;

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
    <div>
      {matchedPath ? (
        <main className="got-bg episode">
          {!episode ? (
            <Loader />
          ) : (
            <div className="container">
              <div className="text-left">
                <Link to="/seasons" className="m-0 btn btn-primary back-btn">
                  Back
                </Link>
              </div>

              <EpisodeCard episode={episode} />
            </div>
          )}
        </main>
      ) : (
        <Redirect from={url} to="/404" />
      )}
    </div>
  );
};

export default Episode;
