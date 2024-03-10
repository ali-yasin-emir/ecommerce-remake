import AddToCartButton from "@/components/AddToCartButton";
import ProductSkeleton from "@/components/ProductSkeleton";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";

interface ProductPageProps {
  params: {
    slug: string;
  };
  productId: string;
}
const getProduct = cache(async (slug: string) => {
  const product = await prisma.product.findUnique({ where: { id: slug } });

  if (!product) {
    notFound();
  }
  return product;
});

export const generateMetadata = async ({
  params: { slug },
}: ProductPageProps): Promise<Metadata> => {
  const product = await getProduct(slug);
  return {
    title: product.name + " | Flowmazon",
    description: product.description,
    icons: product.imageUrl,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
};

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await getProduct(slug);

  return (
    <div className="max-md:items-around flex w-full gap-12 rounded-lg bg-slate-800 p-24 shadow-xl max-2xl:mx-8 max-2xl:flex-col-reverse max-md:mx-4 max-md:gap-4 max-md:px-4 max-md:py-8 max-md:w-full  max-md:h-[800px]">
      {product && (
        <Suspense fallback={<ProductSkeleton />}>
          <div className="flex w-1/2 flex-col justify-center gap-12 max-md:w-full max-md:h-1/2">
            <h1 className="text-6xl leading-snug  tracking-wider text-stone-50 max-md:text-4xl">
              {product?.name}
            </h1>
            <p className="line-clamp-[10] text-justify text-xl  leading-8 tracking-wide text-stone-300 max-md:text-lg">
              {product?.description}
            </p>
            <AddToCartButton productId={product.id} />
          </div>
          <div className="relative w-1/2 max-md:h-1/2 max-md:w-full">
            {product?.imageUrl && (
              <Image
                src={product?.imageUrl}
                fill
                className="rounded-xl object-cover"
                alt={product?.name}
              />
            )}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default ProductPage;
