import styled from "styled-components";
import PurchaseImg from "../assets/purchase-img.jpg";
import SellImg from "../assets/sell_img.jpg";
import EduImg from "../assets/educate_img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// initialization
AOS.init({
  duration: 1000,
  once: true,
});

const StyledDiv = styled.div`
  #section3 {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }

  #section3 h1 {
    font-size: 3rem;
    font-family: "Reem Kufi", sans-serif;
  }

  #section3 .services {
    display: flex;
    flex-direction: row;
  }

  #section3 .services .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #fc8787;
    margin: 10px;
    border-radius: 8px;
    padding: 15px;
    background-color: #f6efec;
    text-align: center;
  }

  #section3 .services .box .img1 {
    height: 12rem;
    margin: auto;
    display: block;
  }

  #section3 .services .box .img2 {
    height: 12rem;
    margin: auto;
    display: block;
  }

  #section3 .services .box .img3 {
    height: 11rem;
    margin: auto;
    display: block;
  }

  #section3 .services .box h2 {
    padding: 10px;
    font-size: 2rem;
    font-family: "Reem Kufi", sans-serif;
    text-decoration: underline;
  }

  #section3 .services .box p {
    padding: 10px;
    font-family: "Reem Kufi", sans-serif;
    font-size: 1.5rem;
    text-decoration: none;
  }

  @media only screen and (min-width: 1018px) and (max-width: 1461px) {
    #section3 .services .box {
      padding: 10px;
    }

    #section3 .services .box .img1 {
      height: 10rem;
    }

    #section3 .services .box .img2 {
      height: 10rem;
    }

    #section3 .services .box .img3 {
      height: 9rem;
    }

    #section3 .services .box h2 {
      padding: 3px;
    }
  }

  @media only screen and (min-width: 972px) and (max-width: 1018px) {
    #section3 .services .box {
      padding: 10px;
      text-align: center;
    }

    #section3 .services .box .img1 {
      height: 10rem;
    }

    #section3 .services .box .img2 {
      height: 10rem;
    }

    #section3 .services .box .img3 {
      height: 9rem;
    }

    #section3 .services .box h2 {
      padding: 7px;
    }
  }

  @media only screen and (min-width: 877px) and (max-width: 972px) {
    #section3 .services {
      flex-direction: column;
    }

    #section3 .services .box {
      padding: 5px;
      text-align: center;
    }

    #section3 .services .box h2 {
      padding: 5px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 877px) {
    #section3 .services {
      flex-direction: column;
    }

    #section3 .services .box {
      padding: 10px;
      text-align: center;
      margin: 10px;
    }

    #section3 .services .box h2 {
      padding: 3px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    #section3 .services {
      flex-direction: column;
    }

    #section3 .services .box {
      margin: 5px;
      padding: 10px;
    }

    #section3 .services .box .img1 {
      height: 10rem;
      margin: auto;
      display: block;
    }

    #section3 .services .box .img2 {
      height: 10rem;
      margin: auto;
      display: block;
    }

    #section3 .services .box .img3 {
      height: 9rem;
      margin: auto;
      display: block;
    }

    #section3 .services .box h2 {
      padding: 3px;
    }
  }
`;

const Provide = () => {
  return (
    <StyledDiv>
      <section id="section3" class="section">
        <h1>We Provide</h1>
        <div class="services">
          <div class="box" data-aos="fade-down">
            <img class="img1" id="img1" src={PurchaseImg} alt="Sell goodies" />
            <h2>Purchase Of Goodies</h2>
            <p>
              We provide variety of goodies for each and every taste, keeping in
              mind the diverse population of our country and their needs. We
              even provide easy return facilities and the total refund of your
              amount*.
            </p>
          </div>
          <div class="box" data-aos="fade-down">
            <img class="img2" id="img2" src={SellImg} alt="Sell goodies" />
            <h2>BUSINESS with us</h2>
            <p>
              Now instead of purchasing you can even sell your goodies with us.
              It provides you an easy way to earn at your doorsteps without any
              headaches. With just a click you can sell your goods all over
              world.
            </p>
          </div>
          <div class="box" data-aos="fade-down">
            <img class="img3" id="img3" src={EduImg} alt="Sell goodies" />
            <h2>Education Of Girlchild</h2>
            <p>
              From your every purchase we donate Rs. 1/ for the education of the
              girl child. Now you can feel proud that you are the part of this
              donation and that you are somewhere contributing for a developed
              nation.
            </p>
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

export default Provide;
