import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar.jsx";

var navdata = [
  {
    name: "test",
    url: "#"
  },
  {
    name: "test2",
    url: "#"
  }
]

ReactDOM.render(<Navbar linkdata={navdata} />, document.getElementById('navbar'));
