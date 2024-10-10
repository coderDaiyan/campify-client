import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cartItemCount } from "../../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../../redux/hooks";

const Navbar = () => {
  const itemCount = useAppSelector(cartItemCount);
  return (
    <div className="navbar bg-base-100 px-32  shadow-md sticky top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Dashboard</a>
              <ul className="p-2 ">
                <li>
                  <a>Manage Products</a>
                </li>
                <li>
                  <a>Create Product</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl">Campify</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/about">
            <li>
              <a>About Us</a>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <a>Products</a>
            </li>
          </Link>
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 w-[200px] z-50">
                <Link to="/dashboard/manage-products">
                  <li>
                    <a>Manage Products</a>
                  </li>
                </Link>
                <Link to="./dashboard/create-product">
                  <li>
                    <a>Create Product</a>
                  </li>
                </Link>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/cart">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCartIcon className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="badge badge-sm indicator-item">
                  {itemCount.toString()}
                </span>
              )}
            </div>
          </button>
        </Link>
        <button className="btn btn-ghost btn-circle">
          <HeartIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
