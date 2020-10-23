import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";
import GotFont from "../../images/got-font.png";

class Home extends Component {
  state = {
    quotes: [
      {
        text:
          "There is only one war that matters. The Great War. And it is here",
        by: "Jon Snow",
      },
      {
        text:
          "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
        by: "Tyrion Lannister",
      },
      {
        text: "There is only one thing we say to death. Not today.",
        by: "Syrio Forel",
      },
    ],
    currentIndex: 2,
  };

  autoIndex() {
    this.setState((state) => {
      state.currentIndex -= 1;
      if (state.currentIndex < 0) {
        state.currentIndex = 2;
      }

      return {
        currentIndex: state.currentIndex,
      };
    });
  }

  componentDidMount() {
    const intervalId = setInterval(() => this.autoIndex(), 10000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const interval = this.state.intervalId;
    clearInterval(interval);
  }

  render() {
    const { quotes, currentIndex } = this.state;

    return (
      <header className="header got-bg">
        <div className="overlay">
          <Spring
            from={{ opacity: 0, marginTop: "-10rem" }}
            to={{ opacity: 1, marginTop: "-5rem" }}
            config={{ delay: 100 }}
          >
            {(props) => (
              <animated.div style={props} className="description">
                <img className="description-img" src={GotFont} alt="got-font" />
                <div className="card description-card">
                  <div className="card-body">
                    <blockquote className="blockquote">
                      <div className="quote-icon">
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>

                      <Transition
                        items={quotes[currentIndex].text}
                        from={{ opacity: 0, transform: "translate(100%, 0)" }}
                        enter={{ opacity: 1, transform: "translate(0%, 0)" }}
                        leave={{ opacity: 0, transform: "translate(-50%, 0)" }}
                      >
                        {(item) => (style) => (
                          <animated.p style={style} className="quote">
                            {item}
                          </animated.p>
                        )}
                      </Transition>

                      <footer className="card-blockquote blockquote-footer">
                        <Transition
                          items={quotes[currentIndex].by}
                          from={{ opacity: 0, transform: "translate(100%, 0)" }}
                          enter={{ opacity: 1, transform: "translate(0%, 0)" }}
                          leave={{
                            opacity: 0,
                            transform: "translate(-50%, 0)",
                          }}
                        >
                          {(item) => (style) => (
                            <animated.cite title="cast" style={style}>
                              {item}
                            </animated.cite>
                          )}
                        </Transition>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <a
                  name="youtube-trailer"
                  className="btn btn-primary"
                  href="https://www.youtube.com/watch?v=rlR4PJn8b8I"
                  role="button"
                >
                  Watch Trailer{" "}
                  <i className="fa fa-play-circle" aria-hidden="true"></i>
                </a>
              </animated.div>
            )}
          </Spring>
        </div>
      </header>
    );
  }
}

export default Home;
