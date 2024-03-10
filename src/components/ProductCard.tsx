import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";
import { Suspense } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = async ({ product }: ProductCardProps) => {
  return (
    <Link
      href={"/products/" + product.id}
      className="card h-[540px] w-96 bg-base-100 shadow-xl"
    >
      {product && (
        <Suspense fallback={<ProductCardSkeleton />}>
          <figure className="relative h-full w-full">
            <Image
              className="object-cover"
              fill
              src={product?.imageUrl}
              alt="product img"
            />
          </figure>
          <div className="flex flex-col justify-around gap-2 p-6">
            <h2 className="card-title">{product?.name}</h2>
            <p className="mb-2 line-clamp-3 text-justify">
              {product?.description}
            </p>
            <span className="text-2xl text-green-600">
              {product?.price + "$"}
            </span>
            <div className="card-actions justify-end"></div>
          </div>
        </Suspense>
      )}
    </Link>
  );
};

export default ProductCard;
