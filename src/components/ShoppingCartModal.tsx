import ViewCartButton from "./ViewCartButton";

const ShoppingCartModal = ({ cart }: any) => {
  return (
    <div className="absolute left-0 top-16 z-10 flex  h-fit w-[240px] flex-col items-center justify-center gap-1 rounded-lg bg-stone-100 p-4 text-black shadow-xl">
      <span className="flex w-full rounded-lg p-1 text-lg font-bold">
        {cart?.size} Items
      </span>
      <span className=" flex w-full rounded-lg px-1 py-2 font-semibold text-slate-500">
        Subtotal: {"$" + cart?.subtotal}
      </span>
      <ViewCartButton />
    </div>
  );
};

export default ShoppingCartModal;
