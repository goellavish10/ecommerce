import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import useInput from "../../hooks/use-input";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 96px);

  .form {
    width: 40%;
    background-color: #696969;
    height: 55vh;
    color: white;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid black;
  }

  .header {
    text-align: center;
    margin-bottom: 10px;
  }

  .header h1 {
    margin-bottom: 12px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }

  button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  button:hover {
    opacity: 1;
  }

  .already {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }

  .already a {
    text-decoration: none;
    color: yellow;
  }

  @media only screen and (max-width: 1400px) {
    .form {
      margin-top: 15px;
      height: 60vh;
    }
  }

  @media only screen and (max-width: 1000px) {
    .form {
      width: 70%;
    }
  }

  @media only screen and (max-width: 500px) {
    .form {
      width: 90%;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  background-color: ${(props) => (props.valid ? "#f56991" : "#f1f1f1")};
  outline: none;
`;

const baseAdress = "https://ecommerce-backend-react.herokuapp.com";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (Cookies.get("authToken")) {
      Axios.get(baseAdress + "/api/users/login", {
        headers: {
          Authorization: Cookies.get("authToken"),
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
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

  let axiosConfig = {
    withCredentials: false,
  };
  const passRef = useRef();
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  });
  const loginHandler = async () => {
    try {
      Axios.post(
        baseAdress + "/api/users/login",
        {
          email: enteredEmail,
          password: passRef.current.value,
        },
        axiosConfig
      )
        .then((response) => {
          const data = response.data;

          Cookies.set("authToken", data.token, { expires: 1 });

          console.log(data);
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (emailInputIsValid) {
      loginHandler();
    } else {
      console.log("Something went wrong");
    }
  };
  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <StyledDiv>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="header">
            <h1>Login</h1>
          </div>
          <hr />
          <div className="details">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <StyledInput
              valid={emailInputHasError}
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              value={enteredEmail}
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <StyledInput
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              ref={passRef}
            />
          </div>
          <div className="button">
            <button type="submit" className="signupbtn">
              Login
            </button>
          </div>
          <div className="already">
            <h6>New here?</h6>
            <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </StyledDiv>
  );
};

export default Login;
