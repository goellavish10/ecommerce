import styled from "styled-components";

const StyledDiv = styled.div`
  .container {
    display: grid;
    grid-gap: 2rem;
    grid-template-areas: "aside aside section4 section4";
  }

  #section4 {
    grid-area: section4;
  }

  #aside {
    grid-area: aside;
  }

  .container .section .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btn1 {
    font-family: "Bree Serif", serif;
    background-color: #f1bbbb;
    margin-top: 10px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
  }

  .btn2 {
    font-family: "Bree Serif", serif;
    background-color: #f1bbbb;
    margin-top: 1px;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
  }

  .btn1 a {
    text-decoration: none;
    color: black;
    padding: 2px 4px;
  }

  .btn1 a:hover {
    background-color: wheat;
    border-radius: 8px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .btn2 a {
    text-decoration: none;
    color: black;
    padding: 2px 4px;
  }

  .btn2 a:hover {
    background-color: wheat;
    border-radius: 8px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    padding: 10px;
    font-size: 2rem;
    font-family: "Reem Kufi", sans-serif;
    text-decoration: underline;
    text-align: center;
  }

  .container .section .text {
    padding: 0.5rem;
    font-family: "Reem Kufi", sans-serif;
    border: 2px solid black;
    border-radius: 8px;
    background-color: #f8f1f1;
    box-shadow: rgb(235, 150, 135);
    resize: both;
    font-size: 1.1rem;
    height: 90px;
  }

  .btn3 {
    font-family: "Bree Serif", serif;
    background-color: #f1bbbb;
    margin-top: 5px;
    border: 2px solid black;
    border-radius: 6px;
    cursor: pointer;
    width: 30%;
    font-size: 15px;
  }

  .btn3:hover {
    background-color: wheat;
    border-radius: 8px;
  }

  #aside {
    font-family: "Reem Kufi", sans-serif;
    font-size: 1.2rem;
    background-color: #f8f1f1;
    padding: 0.7rem;
    height: 11rem;
    overflow-y: scroll;
    margin-top: 2rem;
  }
  @media only screen and (min-width: 1018px) and (max-width: 1461px) {
    #aside {
      height: 12rem;
    }
  }

  @media only screen and (min-width: 972px) and (max-width: 1018px) {
    .container {
      grid-gap: 3rem;
      grid-template-areas: "aside aside aside section4";
    }

    #aside {
      height: 13rem;
    }
  }

  @media only screen and (min-width: 877px) and (max-width: 972px) {
    .container {
      grid-template-areas:
        "aside aside aside aside"
        "section4 section4 section4 section4";
    }

    p {
      margin-top: 2rem;
    }

    .container .section .text {
      margin: 1rem;
      margin-bottom: 0rem;
    }

    .btn3 {
      width: 20%;
      margin-left: 1.1rem;
    }

    #aside {
      margin: 10px;
      margin-left: 0px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 877px) {
    .container {
      grid-template-areas:
        "aside aside aside aside"
        "section4 section4 section4 section4";
    }

    p {
      margin-top: 2rem;
    }

    .container .section .text {
      margin: 1rem;
      margin-bottom: 0rem;
    }

    .btn3 {
      width: 20%;
      margin-left: 1.1rem;
    }

    #aside {
      margin: 10px;
      margin-left: 0px;
    }

    footer {
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 320px) {
    .container {
      grid-template-areas:
        "aside aside aside aside"
        "section4 section4 section4 section4";
    }

    p {
      margin-top: 2rem;
    }

    .container .section .text {
      margin: 1rem;
      margin-bottom: 0rem;
    }

    .btn3 {
      width: 20%;
      margin-left: 1.1rem;
    }

    #aside {
      margin: 10px;
      margin-left: 0px;
    }

    footer {
      font-size: 0.6rem;
    }
  }
`;

const More = () => {
  return (
    <StyledDiv>
      <div className="container">
        <section id="section4" className="section">
          <div id="buttons" className="buttons">
            <button className="btn1">
              <a href="deals.html" target="_blank">
                Visit Our Latest Trendy Collections
              </a>
            </button>
            <br />
            <button className="btn2">
              <a href="contact.html" target="_blank">
                Want To Contact Us?
              </a>
            </button>
          </div>
          <form className="form">
            <p>Want to give us a feedback?</p>
            <textarea
              className="text"
              name="mytext"
              placeholder="Type here"
            ></textarea>
            <br />
            <input type="submit" className="btn3" />
          </form>
        </section>
        <aside id="aside">
          <h1>More About Us</h1>
          is an online fashion store for an ageless adeventure all over the
          country. When it comes to online shopping for women looking for the
          latest fashion trends, T-TrantFashions is the one-stop destination.
          Started in 1991 by our President and a well known public figure and a
          women rights supporter <strong>Ms. Vanshita Dev</strong>, this online
          fashion store comprises of handy bags, accessories and fashion
          jewellery for women online shopping. Every new season brings fresh and
          latest fashion for women.
          <br />
          <br />
          Want to wear the confidence?
          <br />
          Since women are generally very particular about their outfits and
          latest fashion trends. T-Trant Fashions, an online fashion store
          comprises of handy bags, accessories and fashion jewellery.
          <br />
          <br />
          Go till the core and get yourself the perfect fassion accessory for
          you. Since it is physically impossible to check out all the latest
          fashion collection from various brands and shopping stores on the same
          day. Also in this fast moving world, mostly all the womens are so
          engrossed in their work that they forget about themselves and that is
          the main reason why the Online shopping is popular for women these
          days as it is convenient, time-saving and offers variety in goodies
          too.
          <br />
          <br />
          So get ready to wear the best with the hand-picked style accessories
          by T-TrantFashions!
        </aside>
      </div>
    </StyledDiv>
  );
};

export default More;
