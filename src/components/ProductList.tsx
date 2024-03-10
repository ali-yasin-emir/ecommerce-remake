import prisma from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";

const ProductList = async () => {
  const products = await prisma?.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <>
      {products?.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
};

export default ProductList;
