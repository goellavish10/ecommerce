import React from "react";
import styled from "styled-components";
import BgImg from "../assets/nav_img.jpg";
import Button from "../UI/Button";

const StyledSection = styled.section`
  .section1::before {
    content: "";
    background: url(${BgImg}) no-repeat center center/cover;
    position: absolute;
    height: 380px;
    width: 100%;
    z-index: -1;
    opacity: 0.6;
    left: 0px;
    top: 0px;
  }

  .section1 {
    height: 320px;
    font-family: "Reem Kufi", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
  }

  .section1 .one {
    font-size: 2rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 877px) {
    .section1 .one {
      font-size: 2rem;
      padding-bottom: 1.1rem;
      text-align: center;
    }

    .section1 .two {
      font-size: 1.3rem;
      text-align: center;
    }

    .section1::before {
      width: 100%;
      height: 450px;
    }
  }
`;

const Intro = () => {
  return (
    <StyledSection>
      <div className="section1">
        <h1 className="one">A Single Destination For All Your Fashion Style</h1>
        <h2 className="two">
          Because the beauty begins when you get yourself the best
        </h2>
        <Button>
          <a href="#deals">Order Now</a>
        </Button>
      </div>
    </StyledSection>
  );
};

export default Intro;
