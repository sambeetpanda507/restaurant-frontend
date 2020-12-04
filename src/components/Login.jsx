import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const inputChangeHandler = (event) => {
    let name = event.target.name;
    if (name === "email") {
      setEmail(event.target.value);
      setError(null);
    }
    if (name === "password") {
      setPassword(event.target.value);
      setError(null);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return window.alert("email or password can't left empty");
    }
    const login = async () => {
      try {
        const res = await axios({
          url: "/api/signIn",
          method: "post",
          data: {
            email: email,
            password: password,
          },
        });
        if (res) {
          window.localStorage.setItem("user", JSON.stringify(res.data));
          window.location.replace("/");
          notify();
          setEmail("");
          setPassword("");
          setError(null);
        }
      } catch (error) {
        setError("Invalid email or password");
      }
    };
    login();
  };

  const notify = () => {
    toast.success("successfully logged In", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="login">
      {loggedIn ? (
        <ToastContainer
          position="top-right"
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
      ) : (
        ""
      )}
      <form
        className="text-left"
        onSubmit={formSubmitHandler}
        autoComplete="off"
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={inputChangeHandler}
            value={email}
            required
          />
          {error === null ? (
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          ) : (
            <small id="emailHelp" className="form-text text-danger">
              {error}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={inputChangeHandler}
            value={password}
            required
          />
        </div>
        {error === null ? (
          ""
        ) : (
          <small
            id="emailHelp"
            className="form-text text-danger"
            style={{ colro: "red !important" }}
          >
            {error}
          </small>
        )}
        <div className="message">
          <small
            id="emailHelp"
            className="form-text text-muted"
            style={{ colro: "red !important" }}
          >
            Don't have an account? Click <Link to="/signup">here</Link> to sign
            up. Forgot password? Click <Link to="/forgot-password">here</Link>.
          </small>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
