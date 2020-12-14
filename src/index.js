import React from "react";
import ReactDOM from "react-dom";

//import SeasonDisplay from "./SeasonDisplay";

//Functional component
// const Application = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );

//   return (
//     <div>
//       <div> Hi there!</div>
//       <SeasonDisplay />
//     </div>
//   );
// };

//Class-based component
class Application extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude : </div>;
  }
}

ReactDOM.render(<Application />, document.querySelector("#root"));
