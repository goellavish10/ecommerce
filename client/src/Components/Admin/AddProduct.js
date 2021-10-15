import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import Axios from "axios";

const StyledDiv = styled.div`
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input[type="submit"] {
    background-color: #04aa6d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }

  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }

  .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
  }

  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    .col-25,
    .col-75,
    input[type="submit"] {
      width: 100%;
      margin-top: 0;
    }
  }
`;

const AddProduct = () => {
  useEffect(() => {
    if (Cookies.get("authToken")) {
      Axios.get("http://localhost:5000/api/users/login", {
        headers: {
          Authorization: Cookies.get("authToken"),
        },
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.user.isAdmin === true) return;
          else {
            window.location.href = "/";
          }
        })
        .catch((err) => console.error(err));
    }
  }, []);

  const [previewSource, setPreviewSource] = useState("");
  const priceRef = useRef();
  const catRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (!previewSource) return;
    await Axios.post("http://localhost:5000/api/products/add-product", {
      img: previewSource,
      price: priceRef.current.value,
      cat: catRef.current.value,
    })
      .then((res) => {
        alert(res.data.msg);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Something Went Wrong");
        window.location.reload();
      });
  };

  return (
    <StyledDiv>
      <div className="container">
        <form onSubmit={handleFormSubmission}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Product Price</label>
            </div>
            <div className="col-75">
              <input
                ref={priceRef}
                type="text"
                id="fname"
                placeholder="Price"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="category">Category</label>
            </div>
            <div className="col-75">
              <select id="category" name="category" required ref={catRef}>
                <option value="handbags">Handbags</option>
                <option value="watches">Watches</option>
                <option value="rings">Rings</option>
                <option value="earrings">Earrings</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Image</label>
            </div>
            <div className="col-75">
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </StyledDiv>
  );
};

export default AddProduct;
