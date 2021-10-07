import { useState, useEffect, useCallback } from "react";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import Rings from "./Rings";
import Earrings from "./Earrings";
import Fashion from "./Fashion";
import Axios from "axios";

const Jewelry = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const fetchProducts = useCallback((cat) => {
    Axios.get(`http://localhost:5000/api/products?cat=${cat}`).then(
      (response) => {
        setProducts(response.data.data);
      }
    );
  }, []);

  useEffect(() => {
    const cat = window.location.href.split("deals/jewelry/")[1];
    fetchProducts(cat);
  }, [location, fetchProducts]);
  const [category, setCategory] = useState("");
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of JEWELRY : {category}</h2>
      <div className="buttons">
        <ul>
          <li className="btn" onClick={() => setCategory("RINGS")}>
            <NavLink to="/deals/jewelry/rings" activeClassName="act">
              Rings
            </NavLink>
          </li>
          <li className="btn" onClick={() => setCategory("EARRINGS")}>
            <NavLink to="/deals/jewelry/earrings" activeClassName="act">
              Earrings
            </NavLink>
          </li>
          <li className="btn" onClick={() => setCategory("Fashion")}>
            <NavLink to="/deals/jewelry/fashion" activeClassName="act">
              Fashion Jewelry
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route
          path="/deals/jewelry/rings"
          render={() => <Rings rings={products} />}
          exact
        />
        <Route
          path="/deals/jewelry/earrings"
          render={() => <Earrings earrings={products} />}
          exact
        />
        <Route
          path="/deals/jewelry/fashion"
          render={() => <Fashion fashions={products} />}
          exact
        />
      </Switch>
    </div>
  );
};

export default Jewelry;
