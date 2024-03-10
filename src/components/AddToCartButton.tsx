"use client";

import { incrementProductQuantity } from "@/app/products/[slug]/action";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <button
      onClick={() => {
        setSuccess(false);
        startTransition(async () => {
          incrementProductQuantity(productId);
          setSuccess(true);
        });
      }}
      className="flex w-fit items-center justify-center gap-4 rounded-lg bg-stone-50 p-8"
    >
      <span>Add to Cart</span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </span>

      {isPending && <span>Adding to cart...</span>}
      {!isPending && success && <span>Added to cart</span>}
    </button>
  );
};
export default AddToCartButton;
