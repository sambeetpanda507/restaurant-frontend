import React from "react";
import "../scss/contact.scss";
import contactSvg from "../svg/undraw_voice_assistant_nrv7.svg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import { motion } from "framer-motion";

function Help() {
  return (
    <div className="row p-2 my-4">
      <div className="col-md-6 px-5 order-2">
        <ul className="help__list text-left">
          <li>
            <span>
              <LocationOnIcon fontSize="large" style={{ color: "#ffff" }} />
            </span>
            <div>
              <h2>Location:</h2>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>
          </li>
          <li>
            <span>
              <QueryBuilderIcon fontSize="large" style={{ color: "#ffff" }} />
            </span>
            <div>
              <h2>Open Hours:</h2>
              <p>Monday-Friday: 11:00 AM - 2300 PM </p>
            </div>
          </li>
          <li>
            <span>
              <MailIcon fontSize="large" style={{ color: "#ffff" }} />
            </span>
            <div>
              <h2>Email:</h2>
              <p>info@Colorlib</p>
            </div>
          </li>
          <li>
            <span>
              <CallIcon fontSize="large" style={{ color: "#ffff" }} />
            </span>
            <div>
              <h2>Call:</h2>
              <p>+1 1234 55488 55</p>
            </div>
          </li>
        </ul>
      </div>{" "}
      <div className="col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center p-5 border">
        <motion.img
          animate={{
            y: "-3vh",
            transition: { yoyo: Infinity, duration: 1.5 },
          }}
          src={contactSvg}
          alt="svg"
          className="img-fluid"
          style={{ maxHeight: "30rem" }}
        />
      </div>
    </div>
  );
}

export default Help;
