import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const product = useLoaderData();
  const { addToCart, toggleCart } = useContext(AuthContext);
  const { title, img, price, description } = product;

  return (
    <div className="flex justify-center items-center pt-10 pb-10">
      <div className="card card-side bg-base-100 shadow-sm w-full max-w-4xl">
        <figure className="w-[50%] h-auto overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt={title} />
        </figure>
        <div className="card-body pt-20 w-[50%]">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p>Price: ${price}</p>
          <p>Description: {description}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => {
              addToCart(product);
              toggleCart();
            }}> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
