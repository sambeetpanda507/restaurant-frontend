import React from "react";
import "../scss/footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>
              About Foodie<span className="text-danger">.</span>
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="social d-flex justify-content-center align-items-center">
              <div>
                <FacebookIcon fontSize="large" style={{ color: "black" }} />
              </div>
              <div>
                <InstagramIcon fontSize="large" style={{ color: "black" }} />
              </div>
              <div>
                <LinkedInIcon fontSize="large" style={{ color: "black" }} />
              </div>
              <div>
                <TwitterIcon fontSize="large" style={{ color: "black" }} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h1>Projects</h1>
              </li>
              <li>MERN Stack</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h1>Services</h1>
              </li>
              <li>Design</li>
              <li>Full stack</li>
              <li>Express</li>
              <li>Code</li>
              <li>Developer</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <h1>Contact</h1>
              </li>
              <li>43 Raymouth Rd. Baltemoer, London 3910</li>
              <li>+1(123)-456-7890</li>
              <li>+1(123)-456-7890</li>
              <li>info@mydomain.com</li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center">
          <p>Copyright ©2020 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
