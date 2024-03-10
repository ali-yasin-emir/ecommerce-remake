

import Link from "next/link";

const ViewCartButton = () => {
  return (
    <Link
      href="/cart"
      className="flex w-full justify-center rounded-lg bg-stone-300 px-1 py-4 font-semibold text-slate-700"
    >
      View Cart
    </Link>
  );
};

export default ViewCartButton;
