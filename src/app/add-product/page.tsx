import AddProductButton from "@/components/AddProductButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

const AddProductPage = () => {
  const addProduct = async (formData: FormData) => {
    "use server";

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
      throw new Error("Missing required fields");
    }

    await prisma.product.create({
      data: {
        name,
        description,
        imageUrl,
        price,
      },
    });
    redirect("/");
  };

  return (
    <form
      action={addProduct}
      className="flex w-full flex-col gap-6 mt-12 max-md:mt-0 rounded-lg border-2 border-red-300 bg-slate-500 p-12 max-md:mx-4"
    >
      <input
        required
        type="text"
        name="name"
        placeholder="Name"
        className="input input-lg input-bordered w-full py-4 text-black"
      />
      <textarea
        required
        name="description"
        placeholder="Description"
        rows={8}
        cols={12}
        className="textarea textarea-bordered textarea-lg w-full resize-none py-4"
      />
      <input
        required
        type="url"
        name="imageUrl"
        placeholder="Image URL"
        className="input input-lg input-bordered py-4 text-black"
      />
      <input
        required
        min={1}
        type="number"
        name="price"
        placeholder="Price"
        className="input input-lg input-bordered py-4 text-black"
      />
      <AddProductButton className="">Add Product</AddProductButton>
    </form>
  );
};

export default AddProductPage;
