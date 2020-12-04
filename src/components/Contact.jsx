import React from "react";
import "../scss/contact.scss";
import Footer from "./Footer";
import Complaints from "./Complaints";
import ContactUs from "./ContactUs";
import Help from "./Help";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from "@material-ui/icons/Help";
import { useEffect } from "react";
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

const tabVariant = {
  hidden: {
    opacity: 0,
    y: "-50%",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: { delay: 3, duration: 0.5 },
  },
};

const useStyles = makeStyles({
  root: {
    width: 500,
    fontSize: "2rem",
    outline: "none",
  },
});

function Contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [comp, setComp] = React.useState("Contact Us");

  const [changeComp, setChangeComp] = React.useState(null);

  useEffect(() => {
    if (comp === "Contact Us") {
      setChangeComp(ContactUs);
    } else if (comp === "Register Complaint") {
      setChangeComp(Complaints);
    } else {
      setChangeComp(Help);
    }
  }, [comp]);

  const handleTag = (e) => {
    const tag = e.target.textContent;
    setComp(tag);
  };
  return (
    <motion.div
      variants={tableVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="contact d-flex justify-content-center align-items-center">
        <div className="container">
          <motion.div
            // vatiant={tabVariant}
            initial={{ y: "-50vh" }}
            animate={{
              y: 0,
              transition: { delay: 1.5, type: "spring", stiffness: 50 },
            }}
            className="p-3 d-flex justify-content-center"
          >
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={`${classes.root}`}
            >
              <BottomNavigationAction
                label="Contact Us"
                onClick={handleTag}
                icon={
                  <ContactPhoneIcon
                    fontSize="large"
                    style={{ fontSize: "4rem" }}
                  />
                }
              />
              <BottomNavigationAction
                label="Register Complaint"
                onClick={handleTag}
                icon={
                  <FeedbackIcon fontSize="large" style={{ fontSize: "4rem" }} />
                }
              />
              <BottomNavigationAction
                label="Need Help"
                onClick={handleTag}
                icon={
                  <HelpIcon fontSize="large" style={{ fontSize: "4rem" }} />
                }
              />
            </BottomNavigation>
          </motion.div>

          {changeComp}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Contact;
