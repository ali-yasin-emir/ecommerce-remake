import Link from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";

const Navbar = async () => {
  
  const cart = await getCart();

  return (
    <div className="flex h-[100px] w-full items-center rounded-lg bg-base-100 max-md:mx-4">
      <div className="sm-flex-row navbar m-auto flex max-w-7xl items-center gap-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            Reacton
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <ShoppingCartButton cart={cart} />
          <form>
            <div className="form-control max-md:pe-8">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px] p-2 focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
