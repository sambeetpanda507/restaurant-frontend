import React, { useState } from "react";
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

function ChangePassword(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswrod, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = () => {
    if (password !== newPasswrod) {
      return window.alert("Password doesnot match");
    }
    axios({
      url: `/api/reset-password/${props.match.params.token}`,
      method: "patch",
      data: { email: email, password: password },
      onDownloadProgress: setLoading(true),
    })
      .then((res) => {
        if (res.status === 201) {
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.response.data.message.msg);
        notify();
      });
  };

  const notify = () => {
    toast.error(error, {
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
      className="change__password"
    >
      {error === null ? (
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
            <div className="p-5">
              <div className="avatar__div text-center">
                <img src={Avatar} alt="avatar" height="80rem" />
              </div>
              <form
                className="text-left"
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <div></div>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Password must be 8 characters long with atleast one number
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="new password"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                    value={newPasswrod}
                    required
                  />
                </div>
                <div className="text-cente d-flex align-items-center justify-content-center p-2">
                  {loading === true ? (
                    <div
                      className="spinner-border text-primary text-center"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  type="submit"
                  onClick={formSubmitHandler}
                  className="btn btn-primary btn-block mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ChangePassword;
