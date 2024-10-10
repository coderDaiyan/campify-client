/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useGetAllCategoriesQuery } from "../redux/features/category/categoryApi";
import { loadCategories } from "../redux/features/category/categorySlice";
import {
  useEditProductMutation,
  useGetSingleProductQuery,
} from "../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectStyles } from "../style/selectStyle";

const EditProduct = () => {
  const categories = useAppSelector((state) => state.category.categories);
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...data?.data[0],
    },
  });
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const selectedData = data?.data[0];
    if (selectedData) {
      console.log(selectedData); // {name: }
      reset({
        ...data.data[0],
        category: categories?.map((cat) => {
          if (cat?.name === selectedData?.category?.name) {
            return {
              value: cat?._id,
              label: cat?.name,
            };
          }
        }),
      });
    }
  }, [categories, data, reset]);

  const dispatch = useAppDispatch();
  const { data: categoriesData, error: categoryError } =
    useGetAllCategoriesQuery({});
  if (!categoryError) {
    dispatch(loadCategories(categoriesData?.data));
  }

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

  const [editProduct] = useEditProductMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (formData: any) => {
    const id = toast.loading("Editing Product...");
    try {
      console.log(formData);
      const { data: product } = await editProduct({
        data: {
          name: formData.name && formData.name,
          price: parseInt(formData.price) && parseInt(formData.price),
          stockQuantity:
            parseInt(formData.stockQuantity) &&
            parseInt(formData.stockQuantity),
          description: formData.description && formData.description,
          category: formData.category.value && formData.category.value,
          ratings: parseInt(formData.ratings) && parseInt(formData.ratings),
          ...(imageUrls.length > 0 && { images: imageUrls }),
        },
        _id: formData?._id,
      });
      if (product?.status === 200) {
        toast.success("Product updated successfully", {
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

  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  return (
    <>
      <div className="p-16">
        <h1 className="text-2xl font-bold mb-4">Edit New Product</h1>
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
                {...register("name")}
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
                {...register("ratings")}
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
                {...register("price")}
              />
            </div>
          </div>

          <div className="flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select
                    styles={selectStyles}
                    options={categoryOptions}
                    {...field}
                  />
                )}
              />
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
                {...register("stockQuantity")}
              />
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
                {...register("image")}
                onChange={handleImageUpload}
              />
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            {...register("description")}
          ></textarea>

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

export default EditProduct;
