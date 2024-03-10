import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="flex h-[100px] w-full items-center rounded-lg bg-base-100 max-md:mx-4">
      <div className="sm-flex-row navbar m-auto max-w-7xl gap-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            Reacton
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form>
            <div className="form-control max-md:pe-8">
              <input
                name="searchQuery"
                placeholder="Search"
                className="focus:outline-none input input-bordered w-full min-w-[100px] p-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
