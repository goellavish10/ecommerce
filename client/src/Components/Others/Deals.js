import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";
import Img8 from "../assets/img8.jpg";
import Img9 from "../assets/img9.jpg";
import Img10 from "../assets/img10.jpg";
import Img11 from "../assets/img11.jpg";
import Img12 from "../assets/img12.jpg";
import Img13 from "../assets/img13.jpg";
import Img14 from "../assets/img14.jpg";
import Img15 from "../assets/img15.jpg";
import Img16 from "../assets/img16.jpg";
import Img17 from "../assets/img17.jpg";
import Img18 from "../assets/img18.jpg";
import Img19 from "../assets/img19.jpg";
import Img20 from "../assets/img20.jpg";
import Img21 from "../assets/img21.jpg";
import Img22 from "../assets/img22.jpg";
import Img23 from "../assets/img23.jpg";
import Img24 from "../assets/img24.jpg";
import Img25 from "../assets/img25.jpg";
import Img26 from "../assets/img26.jpg";
import Img27 from "../assets/img27.jpg";
import Img28 from "../assets/img28.jpg";
import Img29 from "../assets/img29.jpg";
import Img30 from "../assets/img30.jpg";
import Img31 from "../assets/img31.jpg";
import Img32 from "../assets/img32.jpg";
import Img33 from "../assets/img33.jpg";
import Img34 from "../assets/img34.jpg";
import Img35 from "../assets/img35.jpg";
import Img36 from "../assets/img36.jpg";
import Img37 from "../assets/img37.jpg";
import Img38 from "../assets/img38.jpg";
import Img39 from "../assets/img39.jpg";
import Img40 from "../assets/img40.jpg";
import Img41 from "../assets/img41.jpg";
import Img42 from "../assets/img42.jpg";
import Img43 from "../assets/img43.jpg";
import Img44 from "../assets/img44.jpg";
import Img45 from "../assets/img45.jpg";
import Img46 from "../assets/img46.jpg";
import Img47 from "../assets/img47.jpg";
import Img48 from "../assets/img48.jpg";
import Img49 from "../assets/img49.jpg";
import Img50 from "../assets/img50.jpg";
import Img51 from "../assets/img51.jpg";
import Img52 from "../assets/img52.jpg";
import Img53 from "../assets/img53.jpg";
import Img54 from "../assets/img54.jpg";
import Img55 from "../assets/img55.jpg";
import Img56 from "../assets/img56.jpg";
import Img57 from "../assets/img57.jpg";
import Img58 from "../assets/img58.jpg";
import Img59 from "../assets/img59.jpg";
import Img60 from "../assets/img60.jpg";
import Img61 from "../assets/img61.jpg";
import Img62 from "../assets/img62.jpg";
import Img63 from "../assets/img63.jpg";
import Img64 from "../assets/img64.jpg";
import Img65 from "../assets/img65.jpg";
import Img66 from "../assets/img66.jpg";
import Img67 from "../assets/img67.jpg";
import Img68 from "../assets/img68.jpg";
import Img69 from "../assets/img69.jpg";
import Img70 from "../assets/img70.jpg";
import Img71 from "../assets/img71.jpg";
import Img72 from "../assets/img72.jpg";
import Img73 from "../assets/img73.jpg";
import Img74 from "../assets/img74.jpg";
import Img75 from "../assets/img75.jpg";
import Img76 from "../assets/img76.jpg";
import Img77 from "../assets/img77.jpg";
import Img78 from "../assets/img78.jpg";
import Img79 from "../assets/img79.jpg";
import Img80 from "../assets/img80.jpg";
import { Switch, Route, NavLink, Link } from "react-router-dom";
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

const Handbags = () => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of HANDBAGS!</h2>
      <div className="photos">
        <div className="box">
          <img className="img" src={Img1} alt="handbag" />
          <h3>&#8377; 1299/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img2} alt="handbag" />
          <h3>&#8377; 1399/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img3} alt="handbag" />
          <h3>&#8377; 1599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img4} alt="handbag" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img5} alt="handbag" />
          <h3>&#8377; 1199/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img6} alt="handbag" />
          <h3>&#8377; 1599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img7} alt="handbag" />
          <h3>&#8377; 1299/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img8} alt="handbag" />
          <h3>&#8377; 1299/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img9} alt="handbag" />
          <h3>&#8377; 2199/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img10} alt="handbag" />
          <h3>&#8377; 1499/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img11} alt="handbag" />
          <h3>&#8377; 1399/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img12} alt="handbag" />
          <h3>&#8377; 1199/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img13} alt="handbag" />
          <h3>&#8377; 1499/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img14} alt="handbag" />
          <h3>&#8377; 1299/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img15} alt="handbag" />
          <h3>&#8377; 1699/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img16} alt="handbag" />
          <h3>&#8377; 1299/-</h3>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const Watches = () => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of WATCHES!</h2>
      <div className="photos">
        <div className="box">
          <img className="img" src={Img17} alt="watch" />
          <h3>&#8377; 1199/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img18} alt="watch" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img19} alt="watch" />
          <h3>&#8377; 599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img20} alt="watch" />
          <h3>&#8377; 599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img21} alt="watch" />
          <h3>&#8377; 699/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img22} alt="watch" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img23} alt="watch" />
          <h3>&#8377; 599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img24} alt="watch" />
          <h3>&#8377; 999/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img25} alt="watch" />
          <h3>&#8377; 499/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img26} alt="watch" />
          <h3>&#8377; 699/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img27} alt="watch" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img28} alt="watch" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img29} alt="watch" />
          <h3>&#8377; 599/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img30} alt="watch" />
          <h3>&#8377; 1999/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img31} alt="watch" />
          <h3>&#8377; 1199/-</h3>
          <button>Add To Cart</button>
        </div>
        <div className="box">
          <img className="img" src={Img32} alt="watch" />
          <h3>&#8377; 899/-</h3>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

const Jewelry = () => {
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
            <NavLink to="/deals/jewelry/fas-jewelry" activeClassName="act">
              Fashion Jewelry
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/deals/jewelry/rings" component={Rings} exact />
        <Route path="/deals/jewelry/earrings" component={Earrings} exact />
        <Route path="/deals/jewelry/fas-jewelry" component={Fashion} exact />
      </Switch>
    </div>
  );
};

const Rings = () => {
  return (
    <div className="photos">
      <div className="box">
        <img className="img" src={Img33} alt="ring" />
        <h3>&#8377; 899/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img34} alt="ring" />
        <h3>&#8377; 999/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img35} alt="ring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img36} alt="ring" />
        <h3>&#8377; 2199/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img37} alt="ring" />
        <h3>&#8377; 1399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img38} alt="ring" />
        <h3>&#8377; 1199/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img39} alt="ring" />
        <h3>&#8377; 899/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img40} alt="ring" />
        <h3>&#8377; 599/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img41} alt="ring" />
        <h3>&#8377; 1299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img42} alt="ring" />
        <h3>&#8377; 1499/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img43} alt="ring" />
        <h3>&#8377; 699/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img44} alt="ring" />
        <h3>&#8377; 1299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img45} alt="ring" />
        <h3>&#8377; 799/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img46} alt="ring" />
        <h3>&#8377; 499/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img47} alt="ring" />
        <h3>&#8377; 1799/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img48} alt="ring" />
        <h3>&#8377; 499/-</h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

const Earrings = () => {
  return (
    <div className="photos">
      <div className="box">
        <img className="img" src={Img49} alt="earring" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img50} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img51} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img52} alt="earring" />
        <h3>&#8377; 499/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img53} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img54} alt="earring" />
        <h3>&#8377; 999/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img55} alt="earring" />
        <h3>&#8377; 199/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img56} alt="earring" />
        <h3>&#8377; 199/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img57} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img58} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img59} alt="earring" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img60} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img61} alt="earring" />
        <h3>&#8377; 599/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img62} alt="earring" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img63} alt="earring" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img64} alt="earring" />
        <h3>&#8377; 199/-</h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

const Fashion = () => {
  return (
    <div className="photos">
      <div className="box">
        <img className="img" src={Img65} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img66} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img67} alt="fashion-jewelry" />
        <h3>&#8377; 199/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img68} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img69} alt="fashion-jewelry" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img70} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img71} alt="fashion-jewelry" />
        <h3>&#8377; 599/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img72} alt="fashion-jewelry" />
        <h3>&#8377; 499/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img73} alt="fashion-jewelry" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img74} alt="fashion-jewelry" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img75} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img76} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img77} alt="fashion-jewelry" />
        <h3>&#8377; 599/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img78} alt="fashion-jewelry" />
        <h3>&#8377; 599/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img79} alt="fashion-jewelry" />
        <h3>&#8377; 299/-</h3>
        <button>Add To Cart</button>
      </div>
      <div className="box">
        <img className="img" src={Img80} alt="fashion-jewelry" />
        <h3>&#8377; 399/-</h3>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

const Deals = () => {
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
          <Route path="/deals/handbags" component={Handbags} exact />
          <Route path="/deals/watches" component={Watches} exact />
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
