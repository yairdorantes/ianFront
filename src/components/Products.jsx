import React from "react";
import p1 from "../media/p1.jpg";
import p2 from "../media/p2.jpg";
import p3 from "../media/p3.jpg";
const products = [
  { name: "product1", price: "1.4", image: p1 },
  { name: "product2", price: "1.45", image: p2 },
  { name: "product2", price: "1.45", image: p2 },
  { name: "product333", price: "1.90", image: p3 },
  { name: "product333", price: "1.90", image: p3 },
];

const Products = () => {
  return (
    <section className="pt-10">
      <div className="text-center text-4xl font-bold bg-teal-900 w-1/2 mx-auto py-2 rounded-sm">
        Productos disponibles
      </div>
      <div class="flex flex-wrap justify-center sm:w-3/4 lg:w-3/4  mx-auto">
        {products.map((product) => {
          return (
            <div class="flex-shrink-0 m-6 relative overflow-hidden lg:w-80 md:w-64  rounded-lg w-5/6 shadow-lg">
              <div class="bg-white rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt="Product image"
                  class="w-full h-52 object-cover rounded-t-lg"
                />
                <div class="p-4">
                  <h3 class="text-xl font-semibold text-black mb-2">
                    {product.name}
                  </h3>
                  {/* <p class="text-gray-700 text-base">Product description</p> */}
                  <div class="mt-4 flex items-center justify-between">
                    <span class="text-gray-900 font-bold text-xl">
                      ${product.price}
                    </span>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Añadir al carrito
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
