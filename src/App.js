import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Landing from "./components/Landing";

import Navigation from "./components/Navigation";
import { Switch, Route, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import { AnimatePresence } from "framer-motion";
import ChangePassword from "./components/ChangePassword";

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <Navigation />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Landing} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot-password" exact component={Forgot} />
          <Route
            path="/Change-password/:token"
            exact
            component={ChangePassword}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
