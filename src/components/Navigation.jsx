import React from "react";
import "../scss/navigation.scss";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import LoginSvg from "../svg/undraw_secure_login_pdn4.svg";
import Login from "./Login";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
    backgroundColor: "#fee2b3",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={`${clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })} p-5`}
      role="presentation"
    >
      <div className="my-5">
        <img src={LoginSvg} alt="igm" className="img-fluid"></img>
      </div>
      <Login />
    </div>
  );

  const logoutHandler = () => {
    window.localStorage.removeItem("user");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="container-fluid navigation">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" to="/">
              foodie <span className="navbar__spot">.</span>
            </NavLink>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* TODO: add active link to navigations */}
              <ul className="navbar-nav text-center ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact
                    to="/"
                    activeClassName="active-link"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink
                    exact
                    activeClassName="active-link"
                    className="nav-link"
                    to="/contact"
                  >
                    Contact <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item active">
                  {JSON.parse(localStorage.getItem("user")) ? (
                    <Button className="login__btn" onClick={logoutHandler}>
                      Log Out
                    </Button>
                  ) : (
                    <>
                      {["left"].map((anchor) => (
                        <React.Fragment key={anchor}>
                          <Button
                            className="login__btn"
                            onClick={toggleDrawer(anchor, true)}
                          >
                            Login
                          </Button>
                          <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                          >
                            {list(anchor)}
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
