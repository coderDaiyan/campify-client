import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { loadProducts } from "../../../redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductCard from "../shared/ProductCard";

const BestSelling = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useGetAllProductsQuery({});
  if (!error) {
    dispatch(loadProducts(data?.data));
  }
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl my-5 font-bold">
        Best Selling Products
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(0, 3).map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link to={"/products"}>
          <button className="btn btn-primary text-white">View more</button>
        </Link>
      </div>
    </div>
  );
};

export default BestSelling;
