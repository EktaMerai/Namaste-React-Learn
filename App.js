import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "Mainhdg" }, "Hello All Dev!");

const heading_1 = React.createElement(
  "h1",
  { style: { color: "#4d53af"}, id: "h1tag" },
  "Ekta here"
);

const heading_2 = React.createElement(
  "h2",
  { style: { color: "#583a0b" }, id: "key" },
  "React new bee!!!"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading_1,
  heading_2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);