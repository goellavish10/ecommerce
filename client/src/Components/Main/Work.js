import styled from "styled-components";
import Img from "../assets/nav2_img.jpg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (min-width: 320px) and (max-width: 877px) {
    justify-content: center;
    .image2 {
      display: none;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    justify-content: center;
    .image2 {
      display: none;
    }
  }

  #section2 {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    padding: 0px 12px;
    width: 50%;
    font-family: "Reem Kufi", sans-serif;
  }

  #section2 h1 {
    font-size: 4.9rem;
    text-align: center;
  }

  #section2 h2 {
    text-align: center;
    font-weight: lighter;
  }

  #section2 .mission {
    text-align: center;
    font-weight: bold;
  }

  .image2 {
    width: 40%;
  }

  @media only screen and (min-width: 1018px) and (max-width: 1461px) {
    #section2 h1 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 972px) and (max-width: 1018px) {
    #section2 h1 {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 877px) and (max-width: 972px) {
    #section2 h1 {
      font-size: 3rem;
    }
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

    #section2 {
      padding: 0px 0px;
      width: 100%;
    }

    #section2 h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    #section2 h2 {
      font-size: 1.3rem;
      text-align: center;
      padding-right: 2px;
      padding-left: 2px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    #section2 {
      padding: 0px 0px;
      width: 100%;
    }

    #section2 h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    #section2 h2 {
      font-size: 1.3rem;
      text-align: center;
      padding-right: 2px;
      padding-left: 2px;
    }
  }
`;

const Work = () => {
  return (
    <StyledSection>
      <div id="section2">
        <h2>
          Celebrate your life everyday with latest and trendy fashion wear on
          your favourite shopping destination:
        </h2>
        <h1>T-TRANT FASHIONS</h1>
        <h2>
          We understand your needs and fulfilling them is our pleasure, because
          we know that the beauty begins the moment you decide to be classy and
          elegant.
        </h2>
        <h2 className="mission">
          Our mission is to build a modern destination for women to serve their
          needs with the most wanted product at the affordable price.
        </h2>
      </div>
      <img className="image2" src={Img} alt="accessories" />
    </StyledSection>
  );
};

export default Work;
