import React from "react";
import "../scss/meals.scss";
import breakfast from "../svg/breakfast.svg";
import dinner from "../svg/dinner.svg";
import lunch from "../svg/lunch.svg";
import drink from "../svg/drink.svg";
import MealCards from "./MealCards";
import BF1 from "../images/bf1.jpg";
import BF2 from "../images/bf2.jpg";
import BF3 from "../images/bf3.webp";
import BF4 from "../images/bf4.jpg";
import Desert from "./Desert";
import LandingEvents from "./LandingEvents";
import Footer from "./Footer";
import Dishes from "./Dishes";
import Gallery from "./Gallery";
import SimpleReactLightBox from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";

const cardContent = [
  { cardImage: BF1, cardTitle: "Italian Sauce Mushroom", price: "$19.00" },
  { cardImage: BF2, cardTitle: "Salted Fried Chicken", price: "$19.00" },
  { cardImage: BF3, cardTitle: "Batida Cocktail", price: "$19.00" },
  { cardImage: BF4, cardTitle: "Shrimp and olive", price: "$19.00" },
];

const Meals = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="meals">
        <div className=" d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div data-aos="fade-up" className="meals__options">
                  <h1>
                    Popular <span style={{ color: "#FF5200" }}>Foods</span>
                  </h1>
                  <ul>
                    <li>
                      <img
                        src={breakfast}
                        alt="breakfast"
                        className="meal__icon"
                      />{" "}
                      Breakfast
                    </li>
                    <li>
                      <img src={lunch} alt="breakfast" className="meal__icon" />{" "}
                      Lunch
                    </li>
                    <li>
                      <img
                        src={dinner}
                        alt="breakfast"
                        className="meal__icon"
                      />{" "}
                      Dinner
                    </li>
                    <li>
                      <img src={drink} alt="breakfast" className="meal__icon" />{" "}
                      Drinks
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  {cardContent.map((value) => {
                    return (
                      <div
                        data-aos="fade-up"
                        key={Math.random()}
                        className="col-md-6 g-4 d-flex justify-content-center align-items-center"
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
          </div>
        </div>
        <Desert />
        <Dishes />
        <SimpleReactLightBox>
          <Gallery />
        </SimpleReactLightBox>
        <LandingEvents />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Meals;
