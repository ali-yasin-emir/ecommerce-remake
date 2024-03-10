"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type AddProductButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const AddProductButton = ({
  children,
  className,
  ...props
}: AddProductButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className={`btn btn-block bg-orange-400 text-lg text-white ${className}`}
    >
      {children}
      {pending && (
        <span className="loading loading-spinner loading-md text-green-500" />
      )}
    </button>
  );
};

export default AddProductButton;
