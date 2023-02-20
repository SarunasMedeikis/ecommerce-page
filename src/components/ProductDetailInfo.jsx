import { useOutletContext } from "react-router-dom";
import Button from "./Button.jsx";

export default function ProductDetailInfo({ onProductAdd }) {
  const product = useOutletContext();

  return (
    <>
      <p className="leading-relaxed mb-4">{product.description}</p>

      <div className="flex mb-6 border-gray-200 py-2"></div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
          ${product.price}
        </span>
        <Button
          primary
          onClick={() => onProductAdd(product)}
          className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
        >
          Add to cart
        </Button>
      </div>
    </>
  );
}
