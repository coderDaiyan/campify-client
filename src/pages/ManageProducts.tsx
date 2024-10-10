import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  useDeleteAProductMutation,
  useGetAllProductsQuery,
} from "../redux/features/product/productApi";
import { loadProducts } from "../redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ManageProducts = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useGetAllProductsQuery({});
  if (!error) {
    dispatch(loadProducts(data?.data));
  }
  const products = useAppSelector((state) => state.product.products);

  const [deleteProduct] = useDeleteAProductMutation();
  const handleDelete = async (id: string) => {
    const isConfirm = confirm("Are you sure you want to delete this product?");
    if (isConfirm) {
      if (!error) {
        const { data } = await deleteProduct(id);
        if (data.deletedCount > 0) {
          alert("Product deleted successfully");
        }
      }
    }
  };
  return (
    <>
      <div className="overflow-x-auto m-12 border-2 border-secondary p-3 rounded-lg shadow-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products?.map((product, idx) => (
              <tr key={product._id}>
                <th>{idx + 1}</th>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-circle btn-outline btn-error"
                    onClick={() => handleDelete(product._id)}
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                  <Link to={`/dashboard/edit-product/${product._id}`}>
                    <button className="btn btn-circle btn-outline btn-info ml-2">
                      <PencilSquareIcon className="w-6 h-6" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </>
  );
};

export default ManageProducts;
