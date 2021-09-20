import styled from "styled-components";
import CallBlack from "../assets/call-black.png";
import Logo from "../assets/logo.png";

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
    background: url(${CallBlack}) no-repeat center center/cover;
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

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="navbar">
        <img className="image1" src={Logo} alt="T-Trant fashions" />
        <ul className="navigation">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#deals" className="act">
              Deals
            </a>
          </li>
          <li>
            <a href="#business" className="act">
              Business
            </a>
          </li>
          <li>
            <a href="#contact" className="act">
              Contact Us
            </a>
          </li>
        </ul>
        <button className="call" id="call"></button>
        <div id="number">
          <h3 className="num1">Customer Care:</h3>
          <p className="num2">+91-1234567890 /80 /70</p>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
