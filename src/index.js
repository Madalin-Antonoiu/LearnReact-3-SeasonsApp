import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class Application extends React.Component {
  state = { lat: null, errorMessage: "" };

  // Perfect for data loading!
  componentDidMount() {
    console.log("My Component was rendered to the screen.");

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // Helper
  renderContent() {
    //Case 1
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    //Case 2
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      // return <div>Latitude: {this.state.lat}</div>;
    }

    //Case 3
    return <Spinner text="Please accept location request" />;
  }

  // React says we have to define render, try and avoid conditions here
  render() {
    return <div className="some-class">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<Application />, document.querySelector("#root"));
