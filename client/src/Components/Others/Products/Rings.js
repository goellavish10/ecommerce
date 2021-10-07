import { Image } from "cloudinary-react";

const Rings = ({ rings }) => {
  return (
    <div className="photos">
      {rings.map((ring) => {
        return (
          <div className="box" key={ring._id}>
            <Image
              key={ring._id}
              cloudName="lavishproductions"
              publicId={`ecommerce/${ring.img}`}
              className="img"
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
