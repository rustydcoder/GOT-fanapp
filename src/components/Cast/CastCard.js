import React, { Component } from "react";
import axios from "axios";
import { EachCast } from "./EachCast";

export class CastCard extends Component {
  state = {
    castInfo: [],
  };

  formatData(data) {
    const {
      person: {
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

    return {
      name,
      nationality,
      age: `${birthYear(birthday)} years old`,
      cast,
      src,
    };
  }

  componentDidMount() {
    axios
      .get("http://api.tvmaze.com/shows/82/cast")
      .then(({ data }) => {
        const formattedData = data.map((data) => this.formatData(data));
        this.setState({ castInfo: [...formattedData] });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { castInfo } = this.state;

    return <EachCast casts={castInfo} />;
  }
}
