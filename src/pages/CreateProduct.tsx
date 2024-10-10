/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetAllCategoriesQuery } from "../redux/features/category/categoryApi";
import { loadCategories } from "../redux/features/category/categorySlice";
import { useCreateProductMutation } from "../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const { data, error } = useGetAllCategoriesQuery({});
  if (!error) {
    dispatch(loadCategories(data?.data));
  }

  const categories = useAppSelector((state) => state.category.categories);

  const [createProduct] = useCreateProductMutation();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = toast.loading("Uploading Images...");
    try {
      const urls: string[] = [];

      for (const file of Array.from(e.target.files!)) {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("key", "e1e92146c8cd34cb148d9f18ef3e7f90");
        const res = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        urls.push(data.data.url);
      }
      setImageUrls((prevUrls) => [...prevUrls, ...urls]);
      toast.success("Images uploaded successfully", {
        id,
      });
    } catch (err) {
      toast.error("Image upload failed", {
        id,
      });
    }
  };

  const onSubmit = async (data: any) => {
    const id = toast.loading("Creating Product...");
    try {
      const { data: product } = await createProduct({
        name: data.name,
        price: parseInt(data.price),
        stockQuantity: parseInt(data.stockQuantity),
        description: data.description,
        category: data.category,
        ratings: parseInt(data.ratings),
        images: imageUrls,
      });
      console.log(product);
      if (product.status === 201) {
        toast.success("Product created successfully", {
          id,
        });
      } else {
        toast.error("Something went wrong", {
          id,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", {
        id,
      });
    }
  };

  return (
    <>
      <div className="p-16">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className={`input input-bordered ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500 ">Name is required</p>}
            </div>
            <div className="form-control mx-2 w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                max={5}
                className={`input input-bordered w-full ${
                  errors.stockQuantity ? "border-red-500" : ""
                }`}
                {...register("ratings", { required: true })}
              />
              {errors.stockQuantity && (
                <p className="text-red-500 ">Stock quantity is required</p>
              )}
            </div>{" "}
            <div className="form-control w-full mx-2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                className={`input input-bordered ${
                  errors.price ? "border-red-500" : ""
                }`}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 ">Price is required</p>
              )}
            </div>
          </div>

          <div className="flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className={`select select-bordered w-full ${
                  errors.category ? "border-red-500" : ""
                }`}
                {...register("category", { required: true })}
              >
                <option value="">Select category</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 ">Category is required</p>
              )}
            </div>
            <div className="form-control mx-2 w-full">
              <label className="label">
                <span className="label-text">Stock Quantity</span>
              </label>
              <input
                type="number"
                className={`input input-bordered w-full ${
                  errors.stockQuantity ? "border-red-500" : ""
                }`}
                {...register("stockQuantity", { required: true })}
              />
              {errors.stockQuantity && (
                <p className="text-red-500 ">Stock quantity is required</p>
              )}
            </div>{" "}
            <div className="form-control w-full mx-2">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                multiple
                className={`file-input file-input-bordered w-full ${
                  errors.image ? "border-red-500" : ""
                }`}
                {...register("image", { required: true })}
                onChange={handleImageUpload}
              />
              {errors.image && (
                <p className="text-red-500 ">Image is required</p>
              )}
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 ">Description is required</p>
          )}

          <div className="form-control">
            <button type="submit" className="btn btn-primary text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
