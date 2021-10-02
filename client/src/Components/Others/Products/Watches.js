const Watches = ({ watches }) => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of WATCHES!</h2>
      <div className="photos">
        {watches.map((watch) => {
          return (
            <div className="box" key={watch._id}>
              <img
                className="img"
                src={require("../../assets/" + watch.img + ".jpg").default}
                alt="watch"
              />
              <h3>&#8377; {watch.price}/-</h3>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Watches;
