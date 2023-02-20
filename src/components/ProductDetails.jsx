import { useState, useEffect } from "react";
import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";
import Button from "./Button";
import useFetch from "./useFetch";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
  const params = useParams();

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: "underline",
                          color: "#22C55E",
                          textDecorationColor: "#22C55E",
                        }
                      : undefined
                  }
                  className={` flex-grow  py-2 text-lg px-1 `}
                  to=""
                  end
                >
                  Details
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: "underline",
                          color: "#22C55E",
                          textDecorationColor: "#22C55E",
                        }
                      : undefined
                  }
                  className={` flex-grow  py-2 text-lg px-1 `}
                  to="nutrition"
                >
                  Nutrition
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textDecoration: "underline",
                          color: "#22C55E",
                          textDecorationColor: "#22C55E",
                        }
                      : undefined
                  }
                  className={` flex-grow  py-2 text-lg px-1 `}
                  to="storage"
                >
                  Storage
                </NavLink>
              </div>
              <Outlet context={product} />
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-1/3 lg:h-auto h-24 object-cover object-center rounded"
              src={product.image}
            />
          </div>
        </div>
      </section>
    </>
  );
}
