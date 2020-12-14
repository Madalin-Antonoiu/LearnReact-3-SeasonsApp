import React from "react";
import ReactDOM from "react-dom";
//import SeasonDisplay from "./SeasonDisplay";

//Class-based component
class Application extends React.Component {
  // Not specific to React, but this is the first thing called when class is created
  // Not the only way to initialize state, we will see later
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  // React says we have to define render
  render() {
    return <div>Latitude : {this.state.lat} </div>;
  }
}

ReactDOM.render(<Application />, document.querySelector("#root"));
