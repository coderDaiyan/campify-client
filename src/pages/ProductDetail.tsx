import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import Magnifier from "react-magnifier";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TProduct } from "../types/product";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useGetSingleProductQuery(id);
  const product: TProduct = data?.data[0];
  const [currProductImage, setCurrProductImage] = useState("");

  const onClick = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!", {
      duration: 800,
    });
  };

  const ifExistsInCart = useAppSelector((state) =>
    state.cart.items.find((item) => item?._id === product?._id)
  );
  return (
    <>
      {product && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover">
                <Magnifier src={currProductImage || product?.images[0]} />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mt-2 mb-4">
                  {Array.from({ length: product.ratings }, () => (
                    <FaStar className="w-6 h-6 text-primary" />
                  ))}
                </div>
                <p className="mb-5">{product.description}</p>
                <p>
                  <span className="text-primary font-medium">Category:</span>{" "}
                  {product?.category?.name}
                </p>
                <p>
                  <span className="text-primary font-medium">Stock:</span>{" "}
                  {product?.stockQuantity}
                </p>
                <div className="flex mt-10">
                  <span className="font-medium text-3xl text-gray-900">
                    ৳{product.price}
                  </span>
                  <button
                    className="btn ml-auto btn-primary text-white"
                    onClick={onClick}
                    disabled={ifExistsInCart ? true : false}
                  >
                    {ifExistsInCart ? "Already added to cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
              <div className="mt-5 flex gap-4">
                {product?.images?.length > 1 &&
                  product?.images.map((image) => (
                    <img
                      src={image}
                      className="w-20 h-20 cursor-pointer"
                      onClick={() => setCurrProductImage(image)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
