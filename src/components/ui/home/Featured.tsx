import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { loadProducts } from "../../../redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ProductCard from "../shared/ProductCard";

const Featured = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useGetAllProductsQuery({});
  if (!error) {
    dispatch(loadProducts(data?.data));
  }
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl my-5 font-bold">Featured Products</h1>
      <div className="flex flex-wrap justify-center items-center">
        {products?.slice(5, 8).map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
