import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navbar.jsx";

var navdata = [
  {
    key: 0,
    linktext: "test",
    url: "#test"
  },
  {
    key: 1,
    linktext: "test2",
    url: "#test1"
  },
  {
    key: 2,
    linktext: "submenu",
    url: "#test2",
    submenu: [
      {
        linktext: "boop",
        url: "#test3",
        submenu: [ {linktext: "kek", url: "#test4"} ]
      },
      {
        linktext: "beep",
        url: "#test5"
      }
    ]
  }
]

ReactDOM.render(<NavBar items={navdata} />, document.getElementById('navbar'));
