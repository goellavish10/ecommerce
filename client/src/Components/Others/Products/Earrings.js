const Earrings = ({ earrings }) => {
  return (
    <div className="photos">
      {earrings.map((earring) => {
        return (
          <div className="box" key={earring._id}>
            <img
              className="img"
              src={require("../../assets/" + earring.img + ".jpg").default}
              alt="earring"
            />
            <h3>&#8377; {earring.price}/-</h3>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Earrings;
