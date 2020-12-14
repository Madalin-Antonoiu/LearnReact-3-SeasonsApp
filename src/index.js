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
  }

  // React says we have to define render
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude : </div>;
  }
}

ReactDOM.render(<Application />, document.querySelector("#root"));
