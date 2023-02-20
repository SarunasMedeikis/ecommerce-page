import { Link } from "react-router-dom";
import Button from "./Button";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1584946815081-7fb21ed8c450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We are excited to share our passion for locally-sourced,
              high-quality milk and dairy products with you.
            </h1>
            <p className="mb-8 leading-relaxed">
              Whether you're looking for a classic glass of milk, artisanal
              cheeses, or creamy butter, we have you covered. Our products are
              made with care and attention to detail, and we believe that you
              can truly taste the difference.
            </p>
            <div className="flex w-full justify-center items-end">
              <Link to="/products">
                <Button primary>Products</Button>
              </Link>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              You are just a click away from fresh produce!
            </p>
            <div className="flex">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Check out our App!
                  </span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
