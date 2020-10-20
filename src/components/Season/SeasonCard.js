import React, { Component } from "react";
import axios from "axios";
import { Summary } from "./Summary";
import Modal from "./Modal";

export class SeasonCard extends Component {
  state = {
    season: [],
    modalId: 0,
  };

  CancelToken = axios.CancelToken;
  source = this.CancelToken.source();
  abortController = new AbortController();

  fetchData = async () => {
    try {
      let result = await axios.get("http://api.tvmaze.com/shows/82/seasons", {
        cancelToken: this.source.token,
      });
      return result.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request Unsuccessful", error.message);
        throw new Error("Cancelled");
      }
    }
  };

  formatData = (data) => {
    const {
      id,
      number,
      episodeOrder,
      premiereDate,
      endDate,
      image: { medium: imgSrc },
      summary,
    } = data;

    return {
      id,
      number,
      episodeOrder,
      premiereDate,
      endDate,
      imgSrc,
      summary: summary || "",
    };
  };

  activeModal(id) {
    this.setState({ modalId: id });
  }

  closeModal = () => this.setState({ modalId: 0 });

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        const formattedData = data.map((data) => this.formatData(data));
        this.setState({ season: [...formattedData] });
      })
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this.source.cancel("Request cancelled");
  }

  render() {
    return (
      <div className="season">
        <div className="row">
          {this.state.season.map((item) => {
            const summary = item.summary.replace(/<?\Wp>/g, "");

            return (
              <div
                key={item.id}
                className="season-card col-lg-3 col-md-4 col-6"
              >
                <div className="card bg-dark text-white">
                  <img
                    className="card-img-top img-fluid"
                    src={item.imgSrc}
                    alt={`Season ${item.number}`}
                  />

                  <div className="season-card__body">
                    <div className="card-body">
                      <div className="season-info">
                        <span>
                          Premiered: {item.premiereDate.substring(0, 7)}
                        </span>
                        <span>Ended: {item.endDate.substring(0, 7)}</span>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.activeModal(item.id)}
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
                {this.state.modalId === item.id && (
                  <Modal close={this.closeModal}>
                    <Summary
                      episodes={item.episodeOrder}
                      summary={summary}
                      number={item.number}
                    />
                  </Modal>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
