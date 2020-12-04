import React from "react";
import "../scss/desert.scss";
import D1 from "../svg/D1.svg";
import D2 from "../svg/D2.svg";
import D3 from "../svg/D3.svg";
import D4 from "../svg/D4.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const desertContent = [
  { img: D1, desertName: "Cherry Muffin", desertPrice: "$20" },
  { img: D2, desertName: "Rose Muffin", desertPrice: "$20" },
  { img: D3, desertName: "Sweet Donut", desertPrice: "$20" },
  { img: D4, desertName: "Choco Cake", desertPrice: "$20" },
];

function Desert() {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="desert text-center">
      <h1>
        Popular <span style={{ color: "#FF5200" }}>Desserts</span>
      </h1>
      <div className="container my-4">
        <div className="row">
          {desertContent.map((value, key) => {
            return (
              <div key={key} className="col-lg-3 my-4 desert__items gx-3">
                <div>
                  <img src={value.img} alt={`img${key}`} width="80" />

                  <p>{value.desertName}</p>
                  <p style={{ color: "#FF5200" }}>{value.desertPrice}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Desert;
