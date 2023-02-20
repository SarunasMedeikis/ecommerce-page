import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ProductDetailInfo from "./components/ProductDetailInfo";
import ProductDetailNutrition from "./components/ProductDetailNutrition";
import ProductDetailStorage from "./components/ProductDetailStorage";
import Cart from "./components/Cart";

function NavbarWrapper({ cart }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="text-gray-600 body-font">
          <div className=" container mx-auto flex flex-wrap p-5  md:flex-row ">
            <Navbar cart={cart} />
          </div>
        </header>

        <div className="flex-1 flex flex-col sm:flex-row">
          <main className="flex-1 bg-slate-100 p-2 ">
            <Outlet />
          </main>
        </div>

        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link
              to="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <span className="ml-3 text-xl">MilkMarket</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2023 MilkyMoo
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

function App() {
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper cart={cart} />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: (
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          ),
        },
        {
          path: "products/:id/",
          element: <ProductDetails onProductAdd={handleProductAdd} />,
          children: [
            {
              path: "",
              element: <ProductDetailInfo onProductAdd={handleProductAdd} />,
            },
            {
              path: "nutrition",
              element: <ProductDetailNutrition />,
            },
            {
              path: "storage",
              element: <ProductDetailStorage />,
            },
          ],
        },
        {
          path: "products",
          element: (
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          ),
        },
        {
          path: "cart",
          element: <Cart cart={cart} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
