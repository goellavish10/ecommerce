import { Image } from "cloudinary-react";
const Fashion = ({ fashions }) => {
  return (
    <div className="photos">
      {fashions.map((fashion) => {
        return (
          <div className="box" key={fashion._id}>
            <Image
              key={fashion._id}
              cloudName="lavishproductions"
              publicId={`ecommerce/${fashion.img}`}
              className="img"
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
