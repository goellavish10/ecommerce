import { Image } from "cloudinary-react";

const Earrings = ({ earrings }) => {
  return (
    <div className="photos">
      {earrings.map((earring) => {
        return (
          <div className="box" key={earring._id}>
            <Image
              key={earring._id}
              cloudName="lavishproductions"
              publicId={`ecommerce/${earring.img}`}
              className="img"
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
