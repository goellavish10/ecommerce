import styled from "styled-components";
import Logo from "../assets/logo.png";
import ContactImg from "../assets/contact.jpg";
import Peach from "../assets/peach.jpg";
import CallBlack from "../assets/call-black.png";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  font-family: "Domine", serif;
  background-color: #f3e9d7;
  .img {
    position: absolute;
    width: 8%;
    left: 0px;
    top: 0px;
  }

  /* Image-Right */

  .img1 {
    position: relative;
    margin-left: 39%;
    margin-top: 4%;
    width: 50%;
    z-index: 2;
  }

  /* Image-Background Center */

  .img2 {
    position: absolute;
    width: 20%;
    opacity: 0.9;
    left: 25%;
    top: 4%;
    z-index: 1;
  }

  /* Contact-Form */

  .contact-form {
    position: absolute;
    font-size: 1.3rem;
    width: 30%;
    border: 3px solid #b0abab;
    background-color: white;
    padding: 15px 10px;
    top: 20%;
    left: 15%;
    width: 32%;
    box-shadow: 5px 7px 4px #838181;
    z-index: 9;
  }

  .contact-form h1 {
    text-align: center;
    font-size: 4rem;
  }

  input[type="text"] {
    border: none;
    border-bottom: 2px solid black;
  }

  input[type="tel"] {
    border: none;
    border-bottom: 2px solid black;
  }

  input[type="email"] {
    border: none;
    border-bottom: 2px solid black;
  }

  .contact-form .form {
    margin: 2px 0px;
    padding: 2rem;
  }

  .contact-form .form .text {
    padding: 6px 0px;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-family: "Domine", serif;
  }

  .contact-form .btn {
    display: flex;
    flex-direction: row;
  }

  .btn1 {
    font-family: "Domine", serif;
    margin-top: 5px;
    background-color: white;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    width: 20%;
    padding: 2px;
  }

  .btn1:hover {
    background-color: black;
    color: white;
    border-color: white;
    border-radius: 8px;
  }

  .btn2 {
    font-family: "Domine", serif;
    margin-top: 5px;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    width: 20%;
    padding: 2px;
  }

  .btn2:hover {
    background-color: black;
    color: white;
    border-color: white;
    border-radius: 8px;
  }

  /* Address-Box */

  .address {
    background-color: grey;
    color: black;
    font-weight: lighter;
    width: 55%;
    padding: 14px;
    position: absolute;
    margin-left: 42%;
    margin-bottom: 4%;
    margin-top: -1%;
    z-index: 11;
  }

  #sec1 {
    text-align: center;
  }

  .address .add {
    display: flex;
    flex-direction: row;
    padding: 12px;
    align-items: center;
    justify-content: center;
  }

  .address .add .box {
    padding: 4px 10px;
  }

  .address .add .img3 {
    width: 10%;
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
    z-index: 15;
  }

  /* Making The Website Responsive */

  @media only screen and (min-width: 1328px) and (max-width: 1360px) {
    .contact-form {
      font-size: 1.1rem;
      padding: 10px;
    }

    .contact-form h1 {
      font-size: 2.5rem;
    }

    .contact-form .form .text {
      padding: 4px 0px;
    }

    .address {
      padding: 3px;
    }

    .address .add {
      padding: 3px;
    }
  }

  @media only screen and (min-width: 1288px) and (max-width: 1328px) {
    .contact-form {
      font-size: 1.1rem;
      padding: 6px;
    }

    .contact-form h1 {
      font-size: 2.5rem;
    }

    .contact-form .form .text {
      padding: 4px 0px;
    }

    .address {
      margin-left: 42%;
      padding: 3px;
    }

    .address .add {
      padding: 3px;
    }
  }

  @media only screen and (min-width: 1080px) and (max-width: 1288px) {
    .contact-form {
      font-size: 1.1rem;
      width: 35%;
      left: 12%;
      padding: 6px;
    }

    .contact-form h1 {
      font-size: 2.5rem;
    }

    .contact-form .form .text {
      padding: 4px 0px;
    }

    .address {
      margin-left: 42%;
      margin-top: 2.5%;
      padding: 14px;
      height: 30%;
    }

    .address .add {
      padding: 3px;
    }
  }

  @media only screen and (min-width: 500px) and (max-width: 1080px) {
    .img {
      width: 10%;
    }

    .img1 {
      width: 65%;
      margin-left: 32%;
      margin-top: 10%;
    }

    .img2 {
      width: 39%;
      left: 17%;
    }

    .contact-form {
      position: relative;
      margin-top: 80px;
      font-size: 1rem;
      width: 60%;
      padding: 10px 25px;
    }

    .contact-form h1 {
      font-size: 2.5rem;
    }

    .contact-form .form {
      padding: 1.8rem 0rem;
    }

    .contact-form .form .text {
      font-size: 1rem;
      padding: 4px 0px;
    }

    .contact-form .btn1 {
      font-size: 0.8rem;
    }

    .contact-form .btn2 {
      font-size: 0.8rem;
    }

    .address {
      padding: 14px;
      margin: 8%;
      margin-top: 4%;
      width: 80%;
    }

    .address .add {
      flex-direction: column;
      padding: 3px;
      align-items: flex-start;
    }

    footer {
      bottom: 0%;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 500px) {
    .img {
      width: 12%;
    }

    .img1 {
      width: 70%;
      margin-left: 29%;
      margin-top: 12%;
    }

    .img2 {
      width: 39%;
      left: 17%;
    }

    .contact-form {
      position: relative;
      margin-top: 80px;
      font-size: 0.8rem;
      width: 60%;
      padding: 7px 20px;
    }

    .contact-form h1 {
      font-size: 2rem;
    }

    .contact-form .form {
      padding: 1.8rem 0rem;
    }

    .contact-form .form .text {
      font-size: 0.8rem;
      padding: 4px 0px;
    }

    .contact-form .btn1 {
      font-size: 0.5rem;
    }

    .contact-form .btn2 {
      font-size: 0.5rem;
    }

    .address {
      padding: 14px;
      margin: 6%;
      margin-top: 6%;
      width: 80%;
      font-size: 0.8rem;
    }

    .address .add {
      flex-direction: column;
      padding: 3px;
      align-items: flex-start;
    }

    footer {
      bottom: 0%;
      font-size: 0.6rem;
    }
  }
`;

const Contact = () => {
  return (
    <StyledDiv>
      <div>
        <Link to="/" style={{ cursor: "pointer" }}>
          <img className="img" src={Logo} alt="T-Trant fashions" />
        </Link>
      </div>
      <div>
        <img class="img1" src={ContactImg} alt="Contact Us" />
      </div>
      <div>
        <img class="img2" src={Peach} alt="peach" />
      </div>

      <form>
        <div class="contact-form">
          <h1>Contact Us</h1>
          <div class="form">
            <label for="name">Name:</label>
            <input
              type="text"
              name="YourName"
              id="name"
              class="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="form">
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              name="YourPhone"
              id="phone"
              class="text"
              placeholder="Enter Your Phone-Number"
            />
          </div>

          <div class="form">
            <label for="phone">Email-id:</label>
            <input
              type="email"
              name="YourEmail"
              id="email"
              class="text"
              placeholder="Enter Your Email-id"
            />
          </div>

          <div class="btn">
            <input type="submit" class="btn1" value="Submit" />
            <input type="reset" class="btn2" value="Reset" />
          </div>
        </div>
      </form>

      <div class="address">
        <div id="sec1">
          <h2>Our Address</h2>
        </div>
        <div class="add">
          <div class="box">
            <h4>Head Office:</h4>
            <p>T-Trant Fashion pvt. Ltd.</p>
            <p>A-12, Sector 5, Noida, Uttar-pardesh-201301, India</p>
          </div>
          <div class="box">
            <h4>Return Office:</h4>
            <p>T-Trant Fashion pvt. Ltd.</p>
            <p>C-11, Sector 2, Ludhiana, Punjab-141001, India</p>
          </div>
          <div class="box">
            <h4>Customer Care:</h4>
            <div>
              <img class="img3" src={CallBlack} alt="call" />
              &nbsp; +91-1234567890 /80 /70
              <p>Monday To Saturday</p>
              <p>From 9AM to 9PM (IST)</p>
            </div>
          </div>
        </div>
      </div>

      <footer>Created by Vanshita Dev | &copy;2021 All Rights Reserved</footer>
    </StyledDiv>
  );
};

export default Contact;
