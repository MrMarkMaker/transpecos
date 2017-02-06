import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar.jsx";

var navdata = [
  {
    key: 0,
    name: "test",
    url: "#"
  },
  {
    key: 1,
    name: "test2",
    url: "#"
  },
  {
    key: 2,
    name: "submenu",
    url: "#",
    submenu: [
      {
        name: "boop",
        url: "#"
      },
      {
        name: "beep",
        url: "#"
      }
    ]
  }
]

ReactDOM.render(<Navbar navdata={navdata} />, document.getElementById('navbar'));
