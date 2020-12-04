import React from "react";
import party1 from "../images/party_1.jpg";
import party2 from "../images/party_2.jpg";
// import Aos from "aos";
// import "aos/dist/aos.css";

function LandingEvents() {
  // React.useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div className="landing__events my-4">
      <div className="text-center px-5">
        <p className="text-uppercase">Events</p>
        <h1>
          Enjoy <span style={{ color: "#FF5200" }}>Our Events</span>
        </h1>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators my-1">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container py-5 my-2">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src={party1} alt="party1" className="img-fluid" />
                </div>
                <div className="col-md-6 landing__event__content">
                  {/* <h1></h1> */}
                  <h1 className="text-dark">Birthday Party</h1>
                  <p style={{ color: "#3F3347" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <ul>
                    <li>Away behind the word</li>
                    <li>Bookmarksgrove right at the coast</li>
                    <li>Separated they live</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container py-5 my-2">
              <div className="row">
                <div className="col-md-6 order-md-1 order-2 landing__event__content">
                  {/* <h1></h1> */}
                  <h1 className="text-dark">Guest Chef Nihgt Party</h1>
                  <p style={{ color: "#3F3347" }}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <ul>
                    <li>Away behind the word</li>
                    <li>Bookmarksgrove right at the coast</li>
                    <li>Separated they live</li>
                  </ul>
                </div>{" "}
                <div className="col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center">
                  <img src={party2} alt="party1" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </div>
  );
}

export default LandingEvents;
