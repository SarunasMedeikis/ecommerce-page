import { useState, useEffect } from "react";
import Product from "./Product.jsx";
import useFetch from "./useFetch";
import Loader from "./Loader.jsx";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {loading && <Loader />}
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                details={product}
                cart={props.cart}
                onProductAdd={props.onProductAdd}
                onProductDelete={props.onProductDelete}
              ></Product>
            );
          })}
        </div>
      </div>
    </section>
  );
}
