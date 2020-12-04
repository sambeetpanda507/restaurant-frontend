import React from "react";
import "../scss/meals.scss";
import BF1 from "../images/bf1.jpg";
import BF2 from "../images/bf2.jpg";
import BF3 from "../images/bf3.webp";
import BF4 from "../images/bf4.jpg";
import BF5 from "../images/bf5.jpg";
import BF6 from "../images/bf6.jpg";
import BF7 from "../images/bf7.jpg";
import BF8 from "../images/bf8.jpg";
import MealCards from "./MealCards";
import Aos from "aos";
import "aos/dist/aos.css";

const cardContent = [
  { cardImage: BF1, cardTitle: "Italian Sauce Mushroom", price: "$19.00" },
  { cardImage: BF2, cardTitle: "Salted Fried Chicken", price: "$19.00" },
  { cardImage: BF3, cardTitle: "Fried Potato w/ Garlic", price: "$19.00" },
  { cardImage: BF4, cardTitle: "Shrimp and olive", price: "$19.00" },
  { cardImage: BF5, cardTitle: "Chicken Makhani", price: "$19.00" },
  { cardImage: BF6, cardTitle: "Samosas", price: "$19.00" },
  { cardImage: BF7, cardTitle: "Aloo Gobi", price: "$19.00" },
  { cardImage: BF8, cardTitle: "Matar Paneer", price: "$19.00" },
];

const Dishes = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="dishes my-y">
      <div className="container">
        <div className="dishes__header">
          <h1 data-aos="fade-up">
            Must <span style={{ color: "#FF5200" }}>Try Dishes</span>
          </h1>
        </div>
        <div className="row">
          {cardContent.map((value) => {
            return (
              <div
                data-aos="fade-up"
                key={Math.random()}
                className="col-md-3 g-4 d-flex justify-content-center align-items-center"
              >
                <MealCards
                  key={Math.random()}
                  cardImage={value.cardImage}
                  cardTitle={value.cardTitle}
                  price={value.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dishes;
