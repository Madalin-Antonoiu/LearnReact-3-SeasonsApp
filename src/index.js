import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

//Class-based component
class Application extends React.Component {
  // Not specific to React, but this is the first thing called when class is created
  // Not the only way to initialize state, we will see later
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My Component was rendered to the screen.");
  }

  componentDidUpdate() {
    console.log("My Component got updated - it rerendered.");
  }

  // React says we have to define render
  render() {
    //Case 2
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    //Case 1
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    //Case 3
    //return <div>Loading...</div>;

    return (
      <div>
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui loader"></div>
          </div>
          <p>Please click on "Allow" on the location popup.</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.querySelector("#root"));
