import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../scss/auth.scss";
import Avatar from "../svg/avatar.svg";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const formVariant = {
  hidden: {
    opacity: 0,
    x: "50vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, type: "spring", stiffness: 50 },
  },
};

function Signup(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [err, setErr] = React.useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return window.alert("Password must be 8 characters long");
    }
    axios({
      url: "/api/signUp",
      method: "POST",
      data: {
        name: name,
        email: email,
        password: password,
        contactNumber: number,
        address: address,
      },
    })
      .then((data) => {
        if (data.status === 200) {
          props.history.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.data.message.msg);
        window.alert(err.response.data.message.msg);
        notify();
      });
  };

  const notify = () => {
    toast.error(err, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <motion.div
      variants={tableVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="signup"
    >
      {err === null ? (
        ""
      ) : (
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: "1", fontSize: "1.4rem" }}
        />
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-none d-sm-none d-md-block d-lg-block d-xl-block border col-img">
            <div className="col-overlay"></div>
          </div>
          <motion.div
            variants={formVariant}
            initial="hidden"
            animate="visible"
            className="col-md-6 d-flex align-items-center justify-content-center"
          >
            <div className="">
              <div className="avatar__div text-center">
                <img src={Avatar} alt="avatar" height="70rem" />
              </div>
              <form
                className="text-left"
                onSubmit={formSubmitHandler}
                autoComplete="off"
              >
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputNumber1">Contact Number</label>
                  <input
                    type="Number"
                    className="form-control"
                    id="exampleInputNumber1"
                    name="number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Password must be 8 characters long with atleast one number
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Address</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    required
                  ></textarea>
                </div>
                <div className="message">
                  <small id="emailHelp" className="form-text text-muted">
                    Forgot password? Click{" "}
                    <Link to="/forgot-password">here</Link>.
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-3"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
