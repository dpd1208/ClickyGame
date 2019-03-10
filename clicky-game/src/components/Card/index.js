//
import React from "react";
import "./style.css";

const Card = (props) => (
      <img className="card" onClick={props.cardClick} alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
);

export default Card;
