import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import Auth from "./Auth";
import Stripe from "./Stripe";

import { url } from "./url";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  console.log(user);

  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [products, setProducts] = useState();
  const getProducts = () => {
    axios
      .get(`${url}/api/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="pt-10 ">
      <Auth isOpen={isOpenAuth} setIsOpen={setIsOpenAuth} />
      {/* <div className="text-center text-4xl font-bold bg-teal-900 w-1/2 mx-auto py-2 rounded-sm">
        Productos disponibles
      </div> */}
      <div className="flex flex-wrap justify-center sm:w-3/4 lg:w-3/4  mx-auto">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex-shrink-0 m-6 relative overflow-hidden lg:w-80 md:w-64  rounded-lg w-5/6 shadow-lg"
              >
                <div className="bg-gray-800 hover:text-black hover:bg-slate-300 transition-all hover:-mt-2 text-white rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt="Product image"
                    className="w-full h-52 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold  mb-2">
                      {product.name}
                    </h3>
                    {/* <p className="text-gray-700 text-base">Product description</p> */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold text-xl">
                        ${product.price}
                      </span>
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => {
                          user ? addToCart(product, 1) : setIsOpenAuth(true);
                        }}
                        className="btn btn-primary"
                      >
                        Añadir
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <Stripe></Stripe> */}
    </section>
  );
};

export default Products;
