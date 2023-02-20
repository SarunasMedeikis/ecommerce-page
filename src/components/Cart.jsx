import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

// TODO: Replace with your own publishable key
// const stripeLoadedPromise = loadStripe("PK_REPLACE_WITH_YOUR_PUBLISHABLE_KEY");

export default function Cart({ cart }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    // stripeLoadedPromise.then((stripe) => {
    //   stripe
    //     .redirectToCheckout({
    //       lineItems: lineItems,
    //       mode: "payment",
    //       successUrl: "https://superm.react-tutorial.app/",
    //       cancelUrl: "https://superm.react-tutorial.app/",
    //       customerEmail: email,
    //     })
    //     .then((response) => {
    //       // this will only log if the redirect did not work
    //       console.log(response.error);
    //     })
    //     .catch((error) => {
    //       // wrong API key? you will see the error message here
    //       console.log(error);
    //     });
    // });
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <>
              {cart.length === 0 && (
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                  You have not added any times to your cart yet.
                </h1>
              )}
              {cart.length > 0 && (
                <>
                  {" "}
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                    Your cart
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Below are the items you have added to your cart.
                  </p>
                </>
              )}
            </>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            {cart.length > 0 && (
              <>
                <table className=" mb-4 table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Product
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Unit price
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Quantity
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td className="px-4 py-3">
                            <img
                              src={product.image}
                              width="30"
                              height="30"
                              alt=""
                            />{" "}
                            {product.name}
                          </td>
                          <td className="px-4 py-3">${product.price}</td>
                          <td className="px-4 py-3">{product.quantity}</td>
                          <td className="px-4 py-3">
                            <p>${product.price * product.quantity}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="2"></th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3 text-bold">${totalPrice}</th>
                    </tr>
                  </tfoot>
                </table>

                <form onSubmit={handleFormSubmit}>
                  <p className="mx-auto leading-relaxed text-base">
                    Enter your email and then click on "Proceed to checkout" and
                    your products will be delivered to you on the same day!
                    <br />
                  </p>
                  <Input
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    required
                  />
                  <div className=" mt-2">
                    <Button type="submit" primary>
                      Proceed to checkout{" "}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
