import { Link } from "react-router-dom";

const CategoryDetails = ({ items }) => {
    const { img, title, price, _id } = items;
    return (
        <div>
            <Link to={`/product/${_id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>Price: ${price}</p>
                        <div className="card-actions">
                            <Link>
                                <button className="btn btn-primary">Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryDetails;