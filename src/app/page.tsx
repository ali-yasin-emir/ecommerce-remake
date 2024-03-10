import Link from "next/link";

const Home = async () => {

  return (
    <div className="flex flex-col gap-4">
     <div className="flex gap-6">
     <Link href="products">
        <button className="bg-red-800 text-white p-4">Go to products page</button>
      </Link>
      <Link href="add-product">
        <button className="bg-black text-white p-4">Go to add product page</button>
      </Link>
     </div>
    </div>
  );
};

export default Home;
