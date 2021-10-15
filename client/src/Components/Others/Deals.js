import Logo from "../assets/logo.png";
import styled from "styled-components";
import { Switch, Route, NavLink, Link, useLocation } from "react-router-dom";
import Handbags from "./Products/Handbags";
import Watches from "./Products/Watches";
import Jewelry from "./Products/Jewelry";
import { useCallback, useEffect, useState } from "react";
import Axios from "axios";
const StyledDiv = styled.div`
  font-family: "Reem Kufi", sans-serif;
  .img-logo {
    position: absolute;
    width: 6%;
    left: 0px;
    top: 0px;
  }

  /* Heading */

  .heading {
    display: block;
    text-align: center;
    font-size: 40px;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  /* Aside & Section */

  #aside {
    margin: 4px;
    margin-left: 8px;
    box-shadow: 3px 3px 5px grey;
  }

  .list ul li {
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin: 4px;
    margin-left: 0px;
    box-shadow: 0px 3px 5px grey;
  }

  .list ul li a {
    color: black;
    text-decoration: none;
  }

  .list ul li:hover,
  .list ul .active {
    background-color: #cecece;
    cursor: pointer;
  }

  /* For Jewelry Section*/

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .buttons .btn {
    display: inline;
    font-size: 25px;
    border: 2px solid black;
    box-shadow: 2px 2px 5px black;
    padding: 4px;
    margin: 80px;
  }

  .buttons .btn a {
    text-decoration: none;
    color: black;
  }

  .buttons .btn:hover,
  .buttons #act {
    background-color: rgb(203, 243, 241);
    cursor: pointer;
  }

  .act {
    background-color: rgb(203, 243, 241);
    cursor: pointer;
  }

  /* --End (Extras of Jewelry section)-- */

  .images h2 {
    width: 100%;
    font-size: 35px;
    text-align: center;
    margin-bottom: 10px;
  }

  .images .photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .images .photos h3 {
    text-align: center;
    font-size: 20px;
    padding: 4px;
  }

  .images .photos button {
    width: 30%;
    margin: auto;
    font-size: 1.3rem;
    background-color: #c07474;
    border-radius: 4px;
  }

  .images .photos button:hover {
    background-color: wheat;
    cursor: pointer;
  }

  .images .photos .box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* border: 2px solid black; */
    padding: 30px;
    padding-bottom: 45px;
  }

  .images .photos .box .img {
    height: 350px;
    width: 350px;
    padding: 25px;
    margin-left: 105px;
    margin-right: 105px;
  }

  /* Footer */

  footer {
    background-color: rgb(36, 35, 35);
    color: white;
    padding: 1px 2px;
    display: flex;
    justify-content: center;
    align-items: bottom;
    font-size: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }

  /* Making The Website Responsive */

  @media only screen and (min-width: 1350px) and (max-width: 1470px) {
    .images .photos .box .img {
      height: 300px;
      width: 300px;
      padding: 25px;
      margin-left: 100px;
      margin-right: 100px;
    }

    .buttons .btn {
      margin: 70px;
    }
  }

  @media only screen and (min-width: 1250px) and (max-width: 1350px) {
    .images .photos .box .img {
      height: 300px;
      width: 300px;
      padding: 20px;
      margin-left: 80px;
      margin-right: 80px;
    }

    .buttons .btn {
      font-size: 20px;
      margin: 70px;
    }
  }

  @media only screen and (min-width: 1150px) and (max-width: 1250px) {
    .images .photos .box .img {
      height: 300px;
      width: 300px;
      padding: 15px;
      margin-left: 60px;
      margin-right: 60px;
    }

    .buttons .btn {
      font-size: 20px;
      margin: 65px;
    }
  }

  @media only screen and (min-width: 970px) and (max-width: 1150px) {
    .img-logo {
      width: 8%;
    }

    .images .photos .box {
      margin: auto;
    }

    .images .photos .box .img {
      height: 300px;
      width: 300px;
      padding: 15px;
    }

    .buttons .btn {
      font-size: 20px;
      margin: 45px;
    }
  }

  @media only screen and (min-width: 770px) and (max-width: 970px) {
    .img-logo {
      width: 8%;
    }

    .images h2 {
      font-size: 1.7rem;
    }

    .images .photos .box {
      margin: auto;
    }

    .images .photos .box .img {
      height: 300px;
      width: 300px;
      padding: 15px;
    }

    .buttons .btn {
      font-size: 17px;
      padding: 3px;
      margin: 20px;
    }
  }

  @media only screen and (min-width: 540px) and (max-width: 770px) {
    .img-logo {
      width: 78px;
    }

    .heading {
      margin-left: 30%;
      text-align: left;
    }

    .container {
      flex-direction: column;
    }

    #aside {
      box-shadow: none;
      width: 50%;
      display: block;
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .list ul li {
      padding: 4px;
    }

    .images h2 {
      font-size: 1.7rem;
      margin-top: 6px;
      margin-bottom: 20px;
    }

    .images .photos .box {
      margin: auto;
    }

    .images .photos .box .img {
      height: 400px;
      width: 400px;
      padding: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    .buttons .btn {
      font-size: 15px;
      padding: 2px;
      margin: 10px;
    }

    footer {
      font-size: 1.1rem;
    }
  }

  @media only screen and (min-width: 450px) and (max-width: 540px) {
    .img-logo {
      width: 78px;
    }

    .heading {
      margin-left: 30%;
      text-align: left;
      font-size: 2rem;
    }

    .container {
      flex-direction: column;
    }

    .list ul {
      margin-top: 5%;
    }

    #aside {
      box-shadow: none;
    }

    .list ul li {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .images h2 {
      font-size: 1.7rem;
      margin-top: 6px;
    }

    .images .photos .box {
      margin: auto;
    }

    .images .photos .box .img {
      height: 290px;
      width: 290px;
      padding: 5px;
      margin-left: auto;
      margin-right: auto;
    }

    .images .photos button {
      font-size: 1.1rem;
      width: 40%;
    }

    .buttons .btn {
      display: block;
      font-size: 17px;
      padding: 3px;
      margin: 10px;
      text-align: center;
    }

    footer {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 345px) and (max-width: 450px) {
    .img-logo {
      width: 78px;
    }

    .heading {
      margin-left: 30%;
      font-size: 1.8rem;
      text-align: left;
    }

    .container {
      flex-direction: column;
    }

    .list ul {
      margin-top: 10%;
    }

    #aside {
      box-shadow: none;
    }

    .list ul li {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .images h2 {
      font-size: 1.5rem;
      margin-top: 6px;
    }

    .images .photos .box {
      margin: auto;
    }

    .images .photos .box .img {
      height: 270px;
      width: 270px;
      padding: 5px;
      margin-left: auto;
      margin-right: auto;
    }

    .images .photos button {
      font-size: 1.1rem;
      width: 40%;
    }

    .buttons .btn {
      display: block;
      font-size: 17px;
      padding: 3px;
      margin: 10px;
      text-align: center;
    }

    footer {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 345px) {
    .img-logo {
      width: 78px;
    }

    .heading {
      margin-left: 30%;
      font-size: 1.6rem;
      text-align: left;
    }

    .container {
      flex-direction: column;
    }

    #aside {
      box-shadow: none;
    }

    .list ul {
      margin-top: 10%;
    }

    .list ul li {
      font-size: 1.2rem;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    .images h2 {
      font-size: 1.2rem;
      margin-top: 6px;
    }

    .images .photos .box {
      margin: auto;
      padding: 15px;
    }

    .images .photos .box .img {
      height: 230px;
      width: 230px;
      padding: 5px;
      margin-left: auto;
      margin-right: auto;
    }

    .images .photos button {
      font-size: 0.9rem;
      width: 40%;
    }

    .buttons .btn {
      display: block;
      font-size: 17px;
      padding: 3px;
      margin: 10px;
      text-align: center;
    }

    footer {
      font-size: 0.7rem;
    }
  }
`;
const baseAdress = "https://ecommerce-backend-react.herokuapp.com";
const Deals = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  const fetchProducts = useCallback((cat) => {
    Axios.get(baseAdress + `/api/products?cat=${cat}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }).then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  useEffect(() => {
    const cat = window.location.href.split("deals/")[1];
    fetchProducts(cat);
  }, [location, fetchProducts]);
  return (
    <StyledDiv>
      <div className="heading">
        <div>
          <Link to="/" style={{ cursor: "pointer" }}>
            <img className="img-logo" src={Logo} alt="T-Trant fashions" />
          </Link>
        </div>
        <h1>DEALS</h1>
      </div>
      <div className="container">
        <div className="list" id="aside">
          <ul>
            <li>
              <NavLink to="/deals/handbags" activeClassName="active">
                Handbags
              </NavLink>
            </li>

            <li>
              <NavLink to="/deals/watches" activeClassName="active">
                Watch
              </NavLink>
            </li>
            <li>
              <NavLink to="/deals/jewelry" activeClassName="active">
                Jewelry
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route
            path="/deals/handbags"
            render={() => <Handbags handbags={products} />}
            exact
          />
          <Route
            path="/deals/watches"
            render={() => <Watches watches={products} />}
            exact
          />
          <Route path="/deals/jewelry" component={Jewelry} />
        </Switch>

        <footer>
          Created by Vanshita Dev | &copy;2021 All Rights Reserved
        </footer>
      </div>
    </StyledDiv>
  );
};

export default Deals;
