import React, {Component} from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="navbar-item itemLeft">Clicky Game</li>
          <li className="navbar-item itemCenter">Click an Image to Begin!</li>
          <li className="navbar-item itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
