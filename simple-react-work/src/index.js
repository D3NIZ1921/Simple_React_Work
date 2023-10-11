import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let dc;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  dc = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  dc = "Good Afternoon";
  customStyle.color = "green";
} else {
  dc = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {dc}
  </h1>,

  document.getElementById("root")
);
