import styled from "styled-components";
import Logo from "../assets/logo.png";
import Money from "../assets/money.jpg";
import BusinessImg from "../assets/business.jpg";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  top: 0px;
  height: 180vh;
  font-family: "Domine", serif;
  .progress {
    width: 30%;
    background-color: #f5c874;
    height: 100%;
    z-index: -1;
    display: inline-block;
  }

  /* Logo */

  .progress .img {
    position: absolute;
    width: 8%;
    left: 0px;
    top: 0px;
  }

  .progress .img1 {
    position: absolute;
    width: 30%;
    height: 50%;
    top: 20%;
    left: 15%;
    border: 2px solid black;
    border-radius: 50%;
  }

  .heading {
    position: absolute;
    top: 0%;
    right: 2%;
  }

  .heading h1 {
    font-size: 3.7rem;
  }

  .heading p {
    text-align: right;
  }

  .heading .btn {
    background-color: #f8ddaa;
  }

  .heading .btn a {
    text-decoration: none;
    color: black;
  }

  .heading .btn a:hover {
    background-color: #f3e9d7;
  }

  /* Section */

  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 15%;
    right: 12%;
    float: right;
    text-align: right;
    width: 80%;
  }

  .section h2 {
    font-size: 2.5rem;
  }

  .section .boxes {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2%;
    margin-bottom: 0%;
  }

  .section .boxes h3 {
    font-size: 1.5rem;
    padding-bottom: 4px;
  }

  .section .boxes .box {
    border: 2px solid black;
    text-align: center;
    padding: 10px;
    margin: 5px;
    background-color: #f8ddaa;
  }

  .section .boxes .contact-form {
    border: 3px solid black;
    border-radius: 8px;
    width: 120%;
    margin-left: -12%;
    margin-top: 8%;
    font-size: 1.3rem;
  }

  #form .form {
    margin: 2px 0px;
  }

  #form .form .text {
    padding: 2px 0px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    font-size: 0.8rem;
  }

  #gen {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1rem;
  }

  #form .btn {
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
    background-color: #f3e9d7;
    color: black;
    border-color: black;
    border-radius: 8px;
  }

  .btn2 {
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

  .btn2:hover {
    background-color: #f3e9d7;
    color: black;
    border-color: black;
    border-radius: 8px;
  }

  #form p {
    font-size: 1rem;
    padding-top: 3px;
    text-align: end;
  }

  .img2 {
    position: absolute;
    width: 30%;
    height: 50%;
    top: 102%;
    left: 15%;
    border: 2px solid black;
    border-radius: 50%;
  }

  /* Footer */

  footer {
    background-color: rgb(36, 35, 35);
    color: white;
    padding: 1px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0px;
  }

  /* Making The Website Responsive */

  @media only screen and (min-width: 1442px) and (max-width: 1496px) {
    .progress {
      height: 110%;
    }
  }

  @media only screen and (min-width: 1288px) and (max-width: 1442px) {
    p {
      font-size: 0.99rem;
    }

    .progress {
      width: 25%;
      height: 110%;
    }

    .progress .img1 {
      left: 10%;
    }

    .heading {
      right: 1.3%;
    }

    .heading h1 {
      font-size: 3.4rem;
    }

    .section {
      right: 9%;
    }

    .section h2 {
      font-size: 2.2rem;
    }

    .section .boxes {
      margin-right: 1%;
    }

    .section .boxes h3 {
      font-size: 1.1rem;
    }

    .section .boxes .box {
      margin: 3px;
    }

    .section .boxes .contact-form {
      width: 120%;
      margin-left: -12%;
      margin-top: 8%;
    }

    .img2 {
      left: 10%;
    }

    #form p {
      font-size: 0.9rem;
      padding-top: 2px;
    }
  }

  @media only screen and (min-width: 1080px) and (max-width: 1288px) {
    p {
      font-size: 0.95rem;
    }

    .progress {
      width: 25%;
      height: 110%;
    }

    .progress .img1 {
      left: 10%;
    }

    .heading {
      right: 1.3%;
    }

    .heading h1 {
      font-size: 3.4rem;
    }

    .section {
      right: 9%;
    }

    .section h2 {
      font-size: 2.2rem;
    }

    .section .boxes {
      margin-right: 1%;
    }

    .section .boxes h3 {
      font-size: 1.1rem;
    }

    .section .boxes .box {
      margin: 3px;
    }

    .section .boxes .contact-form {
      width: 120%;
      margin-left: -12%;
      margin-top: 8%;
    }

    .img2 {
      left: 10%;
    }

    #form p {
      font-size: 0.9rem;
      padding-top: 2px;
    }
  }

  @media only screen and (min-width: 930px) and (max-width: 1080px) {
    body {
      height: 100vh;
    }

    .progress {
      width: 100%;
      height: 30%;
      z-index: -1;
      display: block;
    }

    .progress .img1 {
      position: absolute;
      display: block;
      width: 40%;
      height: 30%;
      top: 16%;
      left: 30%;
    }

    .heading h1 {
      font-size: 3.2rem;
    }

    .heading p {
      font-size: 1.1rem;
    }

    .section {
      position: relative;
      justify-content: center;
      align-items: center;
      margin-top: 5%;
      right: 0%;
      width: 100%;
    }

    .section .boxes {
      width: 60%;
    }

    .section .boxes .contact-form {
      width: 120%;
      margin-left: -12%;
      margin-bottom: 6%;
    }

    .img2 {
      display: none;
    }

    #form p {
      padding-bottom: 6px;
    }
  }

  @media only screen and (min-width: 730px) and (max-width: 930px) {
    body {
      height: 100vh;
    }

    .progress {
      width: 100%;
      height: 30%;
      z-index: -1;
      display: block;
    }

    .progress .img1 {
      position: absolute;
      display: block;
      width: 40%;
      height: 30%;
      top: 16%;
      left: 30%;
    }

    .heading h1 {
      font-size: 2.5rem;
    }

    .heading p {
      font-size: 0.9rem;
    }

    .section {
      position: relative;
      justify-content: center;
      align-items: center;
      margin-top: 5%;
      right: 0%;
      width: 100%;
    }

    .section h2 {
      font-size: 1.8rem;
    }

    .section .boxes {
      width: 60%;
    }

    .section .boxes h3 {
      font-size: 1rem;
    }

    .section .boxes p {
      font-size: 0.9rem;
    }

    .section .boxes .contact-form {
      width: 120%;
      margin-left: -12%;
      margin-bottom: 8%;
    }

    #form .form .text {
      font-size: 0.8rem;
    }

    .img2 {
      display: none;
    }

    #form p {
      padding-bottom: 6px;
    }
  }

  @media only screen and (min-width: 460px) and (max-width: 730px) {
    .progress {
      width: 100%;
      height: 20%;
      z-index: -1;
      display: block;
    }

    .progress .img {
      width: 10%;
    }

    .progress .img1 {
      position: absolute;
      display: block;
      width: 300px;
      height: 30%;
      top: 1%;
      left: 0px;
      right: 0px;
      margin: auto;
    }

    .heading {
      position: relative;
      top: 0%;
      right: 0px;
      text-align: center;
    }

    .heading h1 {
      font-size: 2.5rem;
    }

    .heading p {
      font-size: 0.9rem;
    }

    .section {
      position: relative;
      justify-content: center;
      align-items: center;
      margin-top: -26%;
      right: 0%;
      width: 100%;
    }

    .section h2 {
      font-size: 1.8rem;
    }

    .section .boxes {
      width: 80%;
    }

    .section .boxes h3 {
      font-size: 1rem;
    }

    .section .boxes p {
      font-size: 0.9rem;
    }

    .section .boxes .contact-form {
      width: 110%;
      margin-left: -8%;
      margin-bottom: 8%;
    }

    #form .form .text {
      font-size: 0.8rem;
    }

    .img2 {
      display: none;
    }

    #form p {
      padding-bottom: 6px;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 460px) {
    .progress {
      width: 100%;
      height: 20%;
      z-index: -1;
      display: block;
    }

    .progress .img {
      width: 12%;
    }

    .progress .img1 {
      position: absolute;
      display: block;
      width: 220px;
      height: 30%;
      top: 1%;
      left: 0px;
      right: 0px;
      margin: auto;
    }

    .heading {
      position: relative;
      top: 0%;
      right: 0px;
      text-align: center;
    }

    .heading h1 {
      font-size: 2.3rem;
    }

    .heading p {
      font-size: 0.9rem;
    }

    .section {
      position: relative;
      justify-content: center;
      align-items: center;
      margin-top: -25%;
      right: 0%;
      width: 100%;
    }

    .section h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    .section .boxes {
      width: 80%;
    }

    .section .boxes h3 {
      font-size: 1rem;
    }

    .section .boxes p {
      font-size: 0.9rem;
    }

    .section .boxes .contact-form {
      width: 105%;
      margin-left: -7%;
      font-size: 1.1rem;
      margin-bottom: 10%;
    }

    #form .form .text {
      font-size: 0.8rem;
    }

    .img2 {
      display: none;
    }

    .btn1 {
      font-size: 0.8rem;
    }

    .btn2 {
      font-size: 0.8rem;
    }

    #form p {
      font-size: 0.8rem;
      padding-top: 4px;
      padding-bottom: 15px;
    }

    footer {
      font-size: 0.6rem;
    }
  }
`;
const Business = () => {
  return (
    <StyledDiv>
      <div className="progress">
        <div>
          <Link to="/" style={{ cursor: "pointer" }}>
            <img className="img" src={Logo} alt="T-Trant fashions" />
          </Link>
        </div>
        <img src={Money} alt="Make Money" className="img1" />
      </div>

      <div className="heading">
        <h1>Want To Have Business With Us?</h1>
        <p>
          (Fill The Form For More Details{" "}
          <button className="btn">
            <a href="#form">Form</a>
          </button>
          &nbsp;)
        </p>
      </div>

      <div className="section">
        <h2>Bentfits Of Working With Us</h2>
        <div className="boxes">
          <div className="box">
            <h3>International Shipping</h3>
            <p>
              We provide a facility to our coustomers to order and get the
              trendy goodies from anywhere in the world. It means you have the
              opportunity to sell your goods to the worldwide by siting at your
              work place.
            </p>
          </div>

          <div className="box">
            <h3>Access And Discover</h3>
            <p>
              All our goodies are of superiour quality and we does not play with
              the trust of our coustomers. So all your goodies would be
              definately tested and moulded to the superiour ones before we sell
              it to our coustomers.
            </p>
          </div>

          <div className="box">
            <h3>Transparent Pricing</h3>
            <p>
              We dont believe in making our own profits by keeping the amount
              which you deserve. We have transparent dealing of goodies with no
              hidden charges for our coustomer and dealer. So you can blindly
              trust us!
            </p>
          </div>

          <div className="box">
            <h3>24/7 Online Support</h3>
            <p>
              We provide a 24/7 support to all our dealers. You can anytime
              clear your queries, ask questions to our experts and get a well
              satisfactory answer. We are just one call away to make them feel
              comfortable.
            </p>
          </div>

          <div className="box contact-form">
            <form id="form">
              <div className="form">
                <label for="name" className="lable">
                  Name:
                </label>
                <input
                  type="text"
                  name="YourName"
                  id="name"
                  className="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="form">
                <label for="age" className="lable">
                  Age:
                </label>
                <input
                  type="number"
                  name="YourAge"
                  id="age"
                  className="text"
                  placeholder="Enter Your Age"
                />
              </div>

              <div className="form">
                <label for="location" className="lable">
                  Your Location:
                </label>
                <select name="YourLocation" id="location" className="text">
                  <option value="Other" selected>
                    Other
                  </option>
                  <option value="Andaman and Nicobar Island">
                    Andaman and Nicobar Island
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="form">
                <label for="gender" className="lable">
                  Gender:
                </label>
                <div id="gen">
                  Male
                  <input
                    type="radio"
                    name="YourGender"
                    id="gender"
                    className="text"
                  />{" "}
                  Female{" "}
                  <input
                    type="radio"
                    name="YourGender"
                    id="gender"
                    className="text"
                  />{" "}
                  Other{" "}
                  <input
                    type="radio"
                    name="YourGender"
                    id="gender"
                    className="text"
                  />
                </div>
              </div>

              <div className="form">
                <label for="phone" className="lable">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="YourPhone"
                  id="phone"
                  className="text"
                  placeholder="Enter Your Phone-Number"
                />
              </div>

              <div className="form">
                <label for="phone" className="lable">
                  Email-id:
                </label>
                <input
                  type="email"
                  name="YourEmail"
                  id="email"
                  className="text"
                  placeholder="Enter Your Email-id"
                />
              </div>

              <div className="btn">
                <input type="submit" className="btn1" value="Submit" />
                <input type="reset" className="btn2" value="Reset" />
              </div>
              <p>(The details will be sent to you on your e-mail id.)</p>
            </form>
          </div>
        </div>
      </div>

      <img src={BusinessImg} alt="Business With Us" className="img2" />
    </StyledDiv>
  );
};

export default Business;
