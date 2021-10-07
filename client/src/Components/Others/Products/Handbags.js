import { Image } from "cloudinary-react";
const Handbags = ({ handbags }) => {
  return (
    <div className="images" id="section">
      <h2>Here is our top and the trendy collection of HANDBAGS!</h2>
      <div className="photos">
        {handbags.map((handbag) => {
          return (
            <div className="box" key={handbag._id}>
              <Image
                key={handbag._id}
                cloudName="lavishproductions"
                publicId={`ecommerce/${handbag.img}`}
                className="img"
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
