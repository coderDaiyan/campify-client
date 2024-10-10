import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Select from "react-select";
import ProductCard from "../components/ui/shared/ProductCard";
import { useGetAllCategoriesQuery } from "../redux/features/category/categoryApi";
import { loadCategories } from "../redux/features/category/categorySlice";
import { useGetAllProductsQuery } from "../redux/features/product/productApi";
import {
  loadProducts,
  maximumPrice,
} from "../redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectStyles } from "../style/selectStyle";

const Products = () => {
  const dispatch = useAppDispatch();
  const { data, error: productError } = useGetAllProductsQuery({});
  const products = useAppSelector((state) => state.product.products);
  const { data: categoryData, error: categoryError } = useGetAllCategoriesQuery(
    {}
  );
  const categories = useAppSelector((state) => state.category.categories);
  const maxPrice = useAppSelector(maximumPrice);
  console.log(maxPrice);

  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState({
    value: "",
    label: "",
  });
  const [priceRange, setPriceRange] = useState(500);
  const [sortByPrice, setSortByPrice] = useState({
    value: "ascending",
    label: "Low to High",
  });

  if (!productError) {
    dispatch(loadProducts(data?.data));
  }
  if (!categoryError) {
    dispatch(loadCategories(categoryData?.data));
  }

  let filteredProducts = products;

  if (search !== "") {
    filteredProducts = filteredProducts?.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (categoryFilter.value !== "") {
    filteredProducts = filteredProducts?.filter(
      (product) => product?.category?.name === categoryFilter.label
    );
  }

  if (priceRange) {
    filteredProducts = filteredProducts?.filter(
      (product) => product.price <= priceRange
    );
  }

  if (sortByPrice) {
    filteredProducts = filteredProducts?.sort((a, b) =>
      sortByPrice?.value === "ascending" ? a.price - b.price : b.price - a.price
    );
  }

  const clearFilter = () => {
    setSearch("");
    setCategoryFilter({ value: "", label: "" });
    setPriceRange(500);
    setSortByPrice({ value: "ascending", label: "Low to High" });
  };

  return (
    <div className="p-5 flex">
      <div className="w-1/4 p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <h3
            className="mb-4 hover:text-gray-900 text-gray-700 cursor-pointer transition-all ease-in flex items-center"
            onClick={clearFilter}
          >
            Clear Filter <XMarkIcon className="w-5 h-5 mx-2" />
          </h3>
        </div>

        <div className="mb-4 shadow-xl rounded-2xl border-2 border-secondary p-5">
          <label className="font-medium">Search Products</label>
          <input
            type="text"
            placeholder="Search for product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full mt-2 max-w-xs"
          />
        </div>

        <div className="mb-4 shadow-xl rounded-2xl border-2 border-secondary p-5">
          <label className="font-medium">Category</label>
          <Select
            options={categoryOptions}
            styles={selectStyles}
            value={categoryFilter}
            onChange={(value) =>
              setCategoryFilter(value as { value: string; label: string })
            }
            className="mt-2"
          />
        </div>

        <div className="mb-4 shadow-xl rounded-2xl border-2 border-secondary p-5">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <input
            type="range"
            min={0}
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="range range-secondary"
          />
          <div className="text-sm">
            ৳{0} - ৳{priceRange}
          </div>
        </div>

        <div className="mb-4 shadow-xl rounded-2xl border-2 border-secondary p-5">
          <label className="block text-sm font-medium mb-2">
            Sort By Price
          </label>
          <Select
            options={[
              { value: "ascending", label: "Low to High" },
              { value: "descending", label: "High to Low" },
            ]}
            value={sortByPrice}
            onChange={(value) =>
              setSortByPrice(value as { value: string; label: string })
            }
            styles={selectStyles}
            className="mt-2"
          />
        </div>
      </div>

      <div className="w-3/4 p-5">
        <div className="flex flex-wrap justify-center items-center shadow-lg rounded-2xl">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
