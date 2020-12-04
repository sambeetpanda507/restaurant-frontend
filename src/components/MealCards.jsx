import React from "react";

function MealCards(props) {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src={props.cardImage} alt="cardImage" height="150rem" />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "2rem" }}>
          {props.cardTitle}
        </h5>
        <p
          className="card-text"
          style={{ color: "#FF5200", fontSize: "1.8rem" }}
        >
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default MealCards;
