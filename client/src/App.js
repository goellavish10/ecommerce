import { Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Main/Intro";
import Work from "./Components/Main/Work";
import Provide from "./Components/Main/Provide";
import More from "./Components/Main/More";
import Footer from "./Components/Main/Footer";
import Business from "./Components/Others/Business";
import { Switch, Route } from "react-router-dom";
import Contact from "./Components/Others/Contact";
import Deals from "./Components/Others/Deals";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/business"
          render={() => (
            <Fragment>
              <Business />
              <Footer />
            </Fragment>
          )}
          exact
        />
        <Route path="/contact" component={Contact} exact />
        <Route path="/deals" component={Deals} exact />
        <Route path="/deals/" component={Deals} />
        <Route
          path="/signup"
          render={() => (
            <Fragment>
              <Navbar />
              <SignUp />
            </Fragment>
          )}
          exact
        />
        <Route
          path="/login"
          render={() => (
            <Fragment>
              <Navbar />
              <Login />
            </Fragment>
          )}
          exact
        />
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Navbar />
              <Intro />
              <Work />
              <Provide />
              <More />
              <Footer />
            </Fragment>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
