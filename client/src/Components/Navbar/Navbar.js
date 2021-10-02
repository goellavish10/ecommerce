import styled from "styled-components";
import CartBlack from "../assets/cartBlack.png";
import Logo from "../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const StyledNavbar = styled.header`
  .navbar {
    display: flex;
    position: relative;
  }

  .navbar::before {
    content: "";
    background-color: gray;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.3;
    left: 0px;
    top: 0px;
  }

  .navbar .image1 {
    height: 6rem;
    width: 7rem;
  }

  .navigation {
    display: flex;
  }

  .navbar .navigation li {
    list-style: none;
    font-size: 19px;
    padding: 23px 16px;
    font-family: "Bree Serif", serif;
  }

  .navbar .navigation li a {
    position: relative;
    text-decoration: none;
    color: black;
    background-color: #f0d6b0;
    border-radius: 2px;
  }

  .navbar .navigation li a.active {
    border-top: 4px solid #550d01;
    border-bottom: 4px solid #550d01;
  }

  .navbar .navigation li a.act:before,
  .navbar .navigation li a.act:after {
    position: absolute;
    background-color: #550d01;
    width: 100%;
    left: 0%;
    height: 3px;
    content: "";
    opacity: 0;
    transition: all 0.3s;
  }

  .navbar .navigation li a.act:before {
    top: 0px;
    transform: translateY(50px);
  }

  .navbar .navigation li a.act:after {
    bottom: 0px;
    transform: translateY(-50px);
  }

  .navbar .navigation li a.act:hover:before,
  .navbar .navigation li a.act:hover:after {
    opacity: 1;
    transform: translateY(0px);
  }

  .navbar .call::before {
    content: "";
    background: url(${CartBlack}) no-repeat center center/cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
  }

  .navbar .call {
    height: 50%;
    position: absolute;
    top: 0.3rem;
    right: 13rem;
    width: 44px;
    height: 44px;
    cursor: pointer;
  }

  #number {
    display: none;
  }

  .navbar .num1 {
    font-family: "Reem Kufi", sans-serif;
    position: absolute;
    width: fit-content;
    height: fit-content;
    right: 5.5rem;
    top: 3.2rem;
    font-size: 1.5rem;
  }

  .navbar .num2 {
    position: absolute;
    width: fit-content;
    height: fit-content;
    right: 3rem;
    top: 5rem;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Reem Kufi", sans-serif;
    padding: 0px;
  }

  @media only screen and (min-width: 877px) and (max-width: 972px) {
    .navbar .num2 {
      top: 3rem;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 877px) {
    .navbar {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .navbar::before {
      left: 0px;
      top: 0px;
    }

    .navigation {
      align-items: center;
      justify-content: center;
    }

    .navbar .navigation li {
      font-size: 16px;
      padding: 15px 10px;
    }

    .navbar .call {
      width: 20px;
      height: 20px;
      right: 0.5rem;
    }

    .navbar .num1 {
      top: 1.5rem;
      right: 0.7rem;
      font-size: 0.7rem;
    }

    .navbar .num2 {
      top: 0.3rem;
      right: 0rem;
      font-size: 0.65rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    .navbar {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .navigation {
      align-items: center;
      justify-content: center;
    }

    .navbar .navigation li {
      font-size: 14px;
      padding: 15px 10px;
    }

    .navbar .call {
      width: 16px;
      height: 16px;
      right: 0.3rem;
    }

    .navbar .num1 {
      top: 1.5rem;
      right: 0.7rem;
      font-size: 0.65rem;
    }

    .navbar .num2 {
      top: 0.3rem;
      right: 0rem;
      font-size: 0.55rem;
    }
  }
`;

const Navbar = ({ showModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (Cookies.get("authToken")) {
      Axios.get("http://localhost:5000/api/users/login", {
        headers: {
          Authorization: Cookies.get("authToken"),
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.message === "User already logged in!")
            setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const popupHandler = () => {
    showModal();
  };

  const loginPage = location.pathname.split("/")[1];

  const checkLoggedInStatus = !isLoggedIn && loginPage === "login";
  console.log(checkLoggedInStatus);
  return (
    <StyledNavbar>
      <div className="navbar">
        <img className="image1" src={Logo} alt="T-Trant fashions" />
        <ul className="navigation">
          <li>
            <NavLink to="/" activeClassName="active" exact className="act">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/deals" activeClassName="active" exact className="act">
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink to="/business" activeClassName="active" className="act">
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="act">
              Contact Us
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/signup" activeClassName="active" className="act">
                {loginPage === "login" ? "Login" : "Sign Up"}
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/" onClick={popupHandler}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
        <button className="call" id="call"></button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
