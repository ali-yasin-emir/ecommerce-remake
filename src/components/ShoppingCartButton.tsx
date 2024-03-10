import { ShoppingCart } from "@/lib/db/cart";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

const ShoppingCartButton = ({ cart }: ShoppingCartButtonProps) => {
  return <div className="dropdown dropdown-end">ShoppingCartButton</div>;
};

export default ShoppingCartButton;
