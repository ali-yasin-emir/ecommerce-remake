"use client";

import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import ShoppingCartModal from "./ShoppingCartModal";

const ShoppingCartButton = ({ cart }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };

  return (
    <div className="relative flex cursor-pointer flex-col rounded-full p-2 shadow-xl">
      <IoCartOutline onClick={openCart} className="text-3xl text-slate-600" />
      {isCartOpen && <ShoppingCartModal cart={cart} />}
    </div>
  );
};

export default ShoppingCartButton;
