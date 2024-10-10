/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  decreseQuantity,
  deleteFromCart,
  increaseQuantity,
  subTotalPrice,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const subTotal = useAppSelector(subTotalPrice);

  const handleIncrease = (item: any) => {
    if (item.quantity > item.stockQuantity) {
      toast.error("Out of Stock");
    }
    console.log(item?._id);
    dispatch(increaseQuantity(item?._id));
  };

  return (
    <>
      {items.length > 0 ? (
        <div className="grid grid-cols-3 p-5">
          <div className="m-5  p-5  col-span-2">
            <div className="rounded-2xl shadow-lg">
              {items.map((item) => (
                <div className="flex justify-between p-5">
                  <div>
                    <h1 className="font-bold">{item.name}</h1>
                    <h2>TK. {item.price}</h2>
                  </div>
                  <div className="flex">
                    <div className="join mx-2">
                      <button
                        className="btn btn-circle  btn-md join-item"
                        onClick={() => dispatch(decreseQuantity(item._id))}
                      >
                        -
                      </button>
                      <input
                        className="input w-16 input-bordered join-item input-md"
                        value={item.quantity}
                      />

                      <button
                        className="btn btn-circle  btn-md join-item"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-outline btn-error btn-circle  btn-md"
                      onClick={() => dispatch(deleteFromCart(item))}
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="m-5 shadow-lg p-5 rounded-2xl">
            <h1 className="text-2xl font-black">Checkout Summary: </h1>
            <div className="mt-3">
              <div className="flex justify-between ">
                <h3>Subtotal: </h3>
                <h3>{subTotal}</h3>
              </div>
              <div className="flex justify-between  mt-2">
                <h3>Delivery Charge: </h3>
                <h3>20</h3>
              </div>
              <div className="flex justify-between font-bold  mt-2">
                <h3>Total: </h3>
                <h3>{subTotal + 20}</h3>
              </div>
              <hr className="mt-3" />
              <Link to="/checkout">
                <button className="btn btn-primary text-white mt-3 btn-sm w-full">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-10">Cart is empty</h1>
      )}
    </>
  );
};

export default Cart;
