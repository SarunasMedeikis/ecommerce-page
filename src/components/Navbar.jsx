import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <nav className=" flex flex-wrap text-base w-full justify-between ">
      <NavLink
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-3 text-xl"
      >
        MilkMarket
      </NavLink>
      <ul className="flex items-center ">
        <li className="mr-5 hover:text-gray-900">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-bold underline underline-offset-2" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mr-5 hover:text-gray-900">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-bold underline underline-offset-2" : ""
            }
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li className="mr-5 hover:text-gray-900">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-bold underline underline-offset-2" : ""
            }
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 "
          >
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
