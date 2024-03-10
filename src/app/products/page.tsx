import ProductList from "@/components/ProductList";

const ProductsPage = () => {
  return (
    <div className="flex w-full flex-wrap justify-between max-md:mx-auto max-md:flex max-md:flex-col max-md:items-center max-md:gap-12 max-2xl:px-12 max-2xl:gap-24">
      <ProductList />
    </div>
  );
};

export default ProductsPage;
