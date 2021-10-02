const Fashion = ({ fashions }) => {
  return (
    <div className="photos">
      {fashions.map((fashion) => {
        return (
          <div className="box" key={fashion._id}>
            <img
              className="img"
              src={require("../../assets/" + fashion.img + ".jpg").default}
              alt="fashion"
            />
            <h3>&#8377; {fashion.price}/-</h3>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Fashion;
