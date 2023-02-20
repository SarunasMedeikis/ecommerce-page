import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to our local milk market!
          </h1>
          <p className="mb-4 leading-relaxed break-words">
            We are a family-owned business committed to sourcing the freshest
            and highest-quality milk from local farms in our community. We work
            directly with farmers to ensure that they receive fair compensation
            for their hard work and dedication to producing exceptional milk.
          </p>

          <p className="mb-4 leading-relaxed">
            At our market, you can find a variety of milk products including
            whole, skim, and flavored milk, as well as butter, cheese, and other
            dairy items. We believe in the importance of supporting local
            farmers and businesses, and we are proud to offer our customers the
            opportunity to do the same.
          </p>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Check out our products!
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-[720px] h-[400px]"
            alt="hero"
            src="https://images.unsplash.com/photo-1502590464431-3b66d77494d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
        </div>
      </div>
    </section>
  );
}
