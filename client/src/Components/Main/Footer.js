import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  footer {
    background-color: rgb(36, 35, 35);
    color: white;
    padding: 1px 2px;
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    position: sticky;
    bottom: 0px;
  }

  #footer {
    grid-area: footer;
  }

  @media only screen and (min-width: 320px) and (max-width: 877px) {
    footer {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    footer {
      font-size: 0.6rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <h4>
        <a href="T&C.html" target="_blank">
          &nbsp;* &nbsp; Terms & Condition
        </a>
      </h4>

      <footer>Created by SkillyPandaz | &copy;2021 All Rights Reserved</footer>
    </StyledDiv>
  );
};

export default Footer;