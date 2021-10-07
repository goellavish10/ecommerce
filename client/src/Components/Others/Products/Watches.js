import { Image } from "cloudinary-react";
const Watches = ({ watches }) => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of WATCHES!</h2>
      <div className="photos">
        {watches.map((watch) => {
          return (
            <div className="box" key={watch._id}>
              <Image
                key={watch._id}
                cloudName="lavishproductions"
                publicId={`ecommerce/${watch.img}`}
                className="img"
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
