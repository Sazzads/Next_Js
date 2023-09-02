import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
    const categories = await getAllCategories()
    return (
        <div className="container mx-auto">

            <div className="mt-10 px-2">
                <h1 className="text-2xl font-medium mb-5">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {
                        categories.map((category) => <SingleCategory category={category} key={category.id}></SingleCategory>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Categories;