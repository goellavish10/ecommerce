import { Fragment } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Main/Intro";
import Work from "./Components/Main/Work";
import Provide from "./Components/Main/Provide";
import More from "./Components/Main/More";
import Footer from "./Components/Main/Footer";
import Business from "./Components/Others/Business";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route
          path="/business"
          render={() => (
            <Fragment>
              <Business />
              <Navbar />
              <Footer />
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
