import React from "react";
import ReactDOM from "react-dom";

// Babel takes all JSX code and create regular JS code
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
