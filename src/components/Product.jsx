import { Link } from "react-router-dom";
import Button from "./Button.jsx";

export default function Product(props) {
  const { details } = props;

  const productFromCart = props.cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link
          to={`/products/${details.id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={details.image}
            width="420"
            height="260"
          />
        </Link>

        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {details.name}
          </h2>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            ${details.price}
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {details.description}
          </h3>
          <Button
            className="mr-4"
            primary
            onClick={() => props.onProductAdd(details)}
          >
            Add to cart
          </Button>
          {quantity > 0 && (
            <Button onClick={() => props.onProductDelete(details.id)} remove>
              Remove from cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
