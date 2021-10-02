const Rings = ({ rings }) => {
  return (
    <div className="photos">
      {rings.map((ring) => {
        return (
          <div className="box" key={ring._id}>
            <img
              className="img"
              src={require("../../assets/" + ring.img + ".jpg").default}
              alt="ring"
            />
            <h3>&#8377; {ring.price}/-</h3>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Rings;
