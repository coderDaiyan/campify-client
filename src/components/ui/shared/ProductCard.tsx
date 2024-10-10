import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { TProduct } from "../../../types/product";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!", {
      duration: 800,
    });
  };

  const ifExistsInCart = useAppSelector((state) =>
    state.cart.items.find((item) => item._id === product._id)
  );
  return (
    <Link to={`/product/${product._id}`}>
      <div className="card card-compact bg-base-100 w-80  h-fit shadow-xl m-5  hover:border-secondary cursor-pointer hover:border-4 hover:scale-105 transition-all ease-in">
        <figure>
          <img src={product.images[0]} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <p className="font-normal">{product.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">৳{product.price}</h2>
            </div>
            <div>
              <button
                className="btn ml-auto btn-primary text-white"
                onClick={onClick}
                disabled={ifExistsInCart ? true : false}
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
