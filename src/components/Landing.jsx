import React from "react";
import "../scss/landing.scss";
import "aos/dist/aos.css";
import Meals from "./Meals";
import Aos from "aos";
import { motion } from "framer-motion";

const tableVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const Landing = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <motion.div
      variants={tableVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="landing">
        <div className="overlay">
          <div className="landing__text">
            <p className="landing__tagline">
              Enjoy Your Healthy Delicious Meal
            </p>
            <h1>Treat Yourself</h1>
            <p className="landing__quote">
              “Humor keeps us alive. Humor and food. Don't forget food. You can
              go a week without laughing.”
            </p>
            <button className="btn btn-outline-danger btn-lg landing__button p-2">
              Book A Table
            </button>
          </div>
        </div>
      </div>
      <Meals />
    </motion.div>
  );
};

export default Landing;
