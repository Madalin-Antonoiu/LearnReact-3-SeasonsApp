import React from "react";

const config = {
  summer: {
    text: "Let`s hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // If summer months
    return lat > 0 ? "summer" : "winter"; // in the northern hemisphere
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = config[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>\
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
