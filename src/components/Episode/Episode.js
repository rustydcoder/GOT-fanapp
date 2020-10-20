import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Episode = (props) => {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = async () => {
      try {
        let res = await axios.get("http://api.tvmaze.com/shows/82/episodes", {
          cancelToken: source.token,
        });
        let data = _.filter(res.data, ["season", props.number]);
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
  }, []);

  let history = useHistory();

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  console.log(episode);
  return (
    <div className="episode">
      <button type="button" onClick={back}>
        Close
      </button>
      {episode === null ? "Loading..." : <div>{episode[0].name}</div>}
    </div>
  );
};

export default Episode;
