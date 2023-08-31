import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryId);

  return (
    <div className="mt-10 container mx-auto">
      {
        products.map((product)=><SingleProduct key={product.id} product={product}></SingleProduct>)
      }
    </div>
  );
};

export default ProductsPage;