import { useGetAllCategoriesQuery } from "../../../redux/features/category/categoryApi";
import { loadCategories } from "../../../redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useGetAllCategoriesQuery({});
  if (!error) {
    dispatch(loadCategories(data?.data));
  }
  const categories = useAppSelector((state) => state.category.categories);
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl my-5 font-bold">Category</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-px mt-10 mx-24 bg-[#6b6b6b27]">
        {categories?.map((category) => (
          <div className="bg-[#f8fdef] p-7 lg:p-10 c_frame relative">
            <div className="c_image">
              <img
                src={category.image}
                alt=""
                className="mx-auto w-36 cursor-pointer"
              />
            </div>
            <div className="c_text hidden">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
