import React from "react";
import "../scss/meals.scss";
import { useState, useEffect } from "react";
// import TaggedButton from "./TaggedButton";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import { SRLWrapper } from "simple-react-lightbox";
import Aos from "aos";
import "aos/dist/aos.css";

const images = [
  { img: img1, tag: "breakfast" },
  { img: img7, tag: "breakfast" },
  { img: img8, tag: "breakfast" },
  { img: img3, tag: "lunch" },
  { img: img4, tag: "lunch" },
  { img: img5, tag: "lunch" },
  { img: img6, tag: "dinner" },
  { img: img2, tag: "dinner" },
  { img: img9, tag: "dinner" },
];

const Gallery = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleTag = (e) => {
    const tag = e.target.textContent;

    setTag(tag.toLowerCase());
  };

  return (
    <div data-aos="fade-up" className="gallery py-3">
      <h1 className="text-center mt-5">Gallery</h1>
      <div className="tagged__button text-center">
        <button
          onClick={handleTag}
          className={`btn btn-outline-danger btn-lg`}
          id="all"
        >
          All
        </button>
        <button
          onClick={handleTag}
          className={`btn btn-outline-danger btn-lg`}
          id="breakfast"
        >
          Breakfast
        </button>
        <button
          id="lunch"
          onClick={handleTag}
          className={`btn btn-outline-danger btn-lg`}
        >
          Lunch
        </button>
        <button
          id="dinner"
          onClick={handleTag}
          className={`btn btn-outline-danger btn-lg`}
        >
          Dinner
        </button>
      </div>
      <div className="container">
        <SRLWrapper>
          <div className="row">
            {filteredImages.map((value, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4 g-5">
                  <a href={value.img}>
                    <img
                      className="gallery__img"
                      src={value.img}
                      alt={index}
                      height="200rem"
                      width="300rem"
                    ></img>
                  </a>
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};

export default Gallery;
