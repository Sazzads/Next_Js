import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);

  return (
    <div className="container mx-auto">
      <div className="mt-10 container mx-auton grid md:grid-cols-3 gap-10">
        {
          products.map((product) => <SingleProduct key={product.id} product={product}></SingleProduct>)
        }
      </div>
    </div>
  );
};

export default ProductsPage;