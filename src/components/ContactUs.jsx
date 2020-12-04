import React from "react";
import "../scss/contact.scss";
import contactSvg from "../svg/undraw_personal_email_t7nw.svg";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div className="row p-2 my-4">
      <div className="col-md-6 py-3 px-5 order-2">
        <form className="text-left">
          <div className="mb-3">
            <label htmlFor="yourname" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="yourname" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
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

export default ContactUs;
