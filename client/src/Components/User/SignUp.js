import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useInput from "../../hooks/use-input";
import Axios from "axios";
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
    height: 80vh;
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
    height: 100vh;
    .form {
      margin-top: 15px;
      height: 90vh;
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

const SignUp = () => {
  const history = useHistory();
  // useEffect(() => {
  //   if (Cookies.get("authToken")) {
  //     Axios.get("http://localhost:5000/api/users/login", {
  //       headers: {
  //         Authorization: Cookies.get("authToken"),
  //       },
  //     })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }, []);

  useEffect(() => {
    if (Cookies.get("authToken")) {
      Axios.get("http://localhost:5000/api/users/login", {
        headers: {
          Authorization: Cookies.get("authToken"),
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.message === "User already logged in!") {
            history.push("/");
          }
        })
        .catch((err) => console.error(err));
    }
  }, [history]);
  const passRef = useRef();
  const confirmPassRef = useRef();
  const [content, setContent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

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

  async function addUserHandler() {
    try {
      setIsLoading(true);
      const response = await Axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: enteredName,
          email: enteredEmail,
          password: passRef.current.value,
        }
      );
      const data = await response.data;

      console.log(data);

      if (data.status === "ok") {
        setIsLoading(false);
        alert(data.message);
        window.location.href = "http://localhost:3000/";
      }
    } catch (err) {
      console.log(err);
    }
  }

  const passwordValidationHandler = () => {
    const str = passRef.current.value;
    if (
      str.match(/[a-z]/g) &&
      str.match(/[A-Z]/g) &&
      str.match(/[0-9]/g) &&
      str.match(/[^a-zA-Z\d]/g) &&
      str.length >= 8
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (nameInputIsValid && emailInputIsValid) {
      const isPasswordValid = passwordValidationHandler();
      if (isPasswordValid) {
        addUserHandler();
      } else {
        alert(`At least 1 uppercase character.
At least 1 lowercase character.
At least 1 digit.
At least 1 special character.
Minimum 8 characters.`);
      }
    }
  };

  const confirmPasswordBlurHandler = () => {
    if (passRef.current.value === confirmPassRef.current.value) {
      setContent(true);
    } else {
      setContent(false);
    }
  };

  return (
    <StyledDiv>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="header">
            {isLoading && <p>Loading....</p>}
            <h1>Sign Up</h1>
            <p>Please fill in this form to creatre your account</p>
          </div>
          <hr />
          <div className="details">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <StyledInput
              valid={nameInputHasError}
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              onBlur={nameBlurHandler}
              onChange={nameChangeHandler}
              value={enteredName}
            />
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
              ref={passRef}
              type="password"
              placeholder="Enter Password"
              name="password"
              onBlur={confirmPasswordBlurHandler}
              required
            />

            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <StyledInput
              ref={confirmPassRef}
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
              onBlur={confirmPasswordBlurHandler}
            />
            {content ? (
              ""
            ) : (
              <p style={{ color: "red" }}>Password does not match!</p>
            )}
          </div>
          <div className="button">
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
          <div className="already">
            <h6>Already have an account?</h6>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </StyledDiv>
  );
};

export default SignUp;
