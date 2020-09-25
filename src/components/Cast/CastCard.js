import React, { Component } from "react";
import axios from "axios";
import { EachCast } from "./EachCast";
import _ from "lodash";

export class CastCard extends Component {
  state = {
    castInfo: [],
  };

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  abortController = new AbortController();

  fetchData = async () => {
    try {
      let result = await axios.get("http://api.tvmaze.com/shows/82/cast", {
        cancelToken: this.source.token,
      });
      return result.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request unsuccessful", error.message);
        throw new Error("Cancelled");
      }
    }
  };

  formatData = (data) => {
    const {
      person: {
        id,
        name,
        birthday,
        country: { name: nationality },
      },
    } = data;
    const {
      character: {
        name: cast,
        image: { medium: src },
      },
    } = data;

    const birthYear = (birthDay) =>
      new Date().getFullYear() -
      parseInt(
        birthDay
          .split("-")
          .filter((str) => str.length >= 3)
          .join()
      );

    const pattern = /lady|prince|queen|"littlefinger"|lord|ser|king|commander/gi;

    return {
      id,
      name,
      nationality,
      age: `${birthYear(birthday)} years old`,
      cast: _.replace(cast, pattern, ""),
      src,
    };
  };

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        const formattedData = data.map((data) => this.formatData(data));
        this.setState({ castInfo: [...formattedData] });
      })
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this.source.cancel("Request cancelled");
  }

  render() {
    const { castInfo } = this.state;

    return <EachCast casts={castInfo} />;
  }
}
