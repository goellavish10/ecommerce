import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const StyledDiv = styled.div`
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  .show {
    opacity: 1;
    pointer-events: visible;
  }

  .modal-content {
    width: 500px;
    background-color: #fff;
    transform: translateY(-200px);
    transition: all 0.3s ease-in-out;
  }

  .show .modal-content {
    transform: translateY(0);
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
  }

  .modal-title {
    margin: 0;
  }

  .modal-body {
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
`;

const baseAdress = "https://ecommerce-backend-react.herokuapp.com";
const Modal = ({ show, close }) => {
  const history = useHistory();
  const logoutHandler = () => {
    Axios.get(baseAdress + "/api/users/logout", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }).then((response) => {
      const data = response.data;
      if (data.status === "ok") {
        console.log("Logged Out");
        Cookies.remove("authToken");
        history.push("/");
        window.location.reload();
      }
    });
  };
  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <StyledDiv onClick={close}>
        <div className={`modal ${show ? "show" : ""}`}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">You Sure?</h4>
            </div>
            <div className="modal-body">
              <p>You'll not be able to access your cart after loggin out!</p>
            </div>
            <div className="modal-footer">
              <button className="button" onClick={logoutHandler}>
                Log Out
              </button>
              <button className="button" onClick={close}>
                Close
              </button>
            </div>
          </div>
        </div>
      </StyledDiv>
    </CSSTransition>,
    document.getElementById("modal")
  );
};

export default Modal;
