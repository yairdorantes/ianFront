import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import p1 from "../media/p1.jpg";
import p2 from "../media/p2.jpg";
import p3 from "../media/p3.jpg";
const products = [
  { id: 1, name: "product1", price: "1.4", image: p1 },
  { id: 2, name: "product2", price: "1.45", image: p2 },
  { id: 2, name: "product2", price: "1.45", image: p2 },
  { id: 3, name: "product333", price: "1.90", image: p3 },
  { id: 1, name: "product333", price: "1.90", image: p3 },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="pt-10 ">
      <div className="text-center text-4xl font-bold bg-teal-900 w-1/2 mx-auto py-2 rounded-sm">
        Productos disponibles
      </div>
      <div class="flex flex-wrap justify-center sm:w-3/4 lg:w-3/4  mx-auto">
        {products.map((product) => {
          return (
            <div class="flex-shrink-0 m-6 relative overflow-hidden lg:w-80 md:w-64  rounded-lg w-5/6 shadow-lg">
              <div class="bg-gray-800 hover:text-black hover:bg-slate-300 transition-all hover:-mt-2 text-white rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt="Product image"
                  class="w-full h-52 object-cover rounded-t-lg"
                />
                <div class="p-4">
                  <h3 class="text-xl font-semibold  mb-2">{product.name}</h3>
                  {/* <p class="text-gray-700 text-base">Product description</p> */}
                  <div class="mt-4 flex items-center justify-between">
                    <span class="font-bold text-xl">${product.price}</span>
                  </div>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => {
                        addToCart(product, 1);
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
    </section>
  );
};

export default Products;
