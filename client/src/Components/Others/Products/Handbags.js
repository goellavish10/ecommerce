const Handbags = ({ handbags }) => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of HANDBAGS!</h2>
      <div className="photos">
        {handbags.map((handbag) => {
          return (
            <div className="box" key={handbag._id}>
              <img
                className="img"
                src={require("../../assets/" + handbag.img + ".jpg").default}
                alt="handbag"
              />
              <h3>&#8377; {handbag.price}/-</h3>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Handbags;
