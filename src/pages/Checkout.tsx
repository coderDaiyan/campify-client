import toast from "react-hot-toast";
import { subTotalPrice } from "../redux/features/cart/cartSlice";
import { useAppSelector } from "../redux/hooks";

const Checkout = () => {
  const items = useAppSelector((state) => state.cart.items);

  const subTotal = useAppSelector(subTotalPrice);

  return (
    <>
      {items.length > 0 ? (
        <div className="grid grid-cols-3 p-5">
          <div className="m-5  p-5  col-span-2">
            <div className="rounded-2xl shadow-lg">
              <form className="p-5">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full mb-3"
                />
                <div className="flex">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Phone Number</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full  ml-5">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
                <label className="form-control mt-3">
                  <div className="label">
                    <span className="label-text">Delivery Address</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Delivery Address"
                  ></textarea>
                </label>
              </form>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mx-5 my-10 shadow-lg p-5 rounded-2xl">
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
                <hr className="mt-2" />
                <div className="flex justify-between font-bold  mt-2">
                  <h3>Total: </h3>
                  <h3>{subTotal + 20}</h3>
                </div>
              </div>
            </div>
            <div className="mx-5 shadow-lg p-5 rounded-2xl">
              <h1 className="text-2xl font-black">Payment Method: </h1>
              <div className="mt-3">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Cash on Delivery</span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-primary"
                    />
                  </label>
                </div>
                <hr className="mt-3" />

                <button
                  className="btn btn-primary text-white mt-3 btn-sm w-full"
                  onClick={() => toast.success("Order Placed")}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center mt-10">Cart is empty</h1>
      )}
    </>
  );
};

export default Checkout;
