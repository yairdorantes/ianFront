import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import OutsideClickHandler from "react-outside-click-handler";

const Cart = ({ showCart, setShowCart }) => {
  // const [showCart, setShowCart] = useState(false);
  const { cartItems, deleteItem, totalCart } = useContext(CartContext);
  return (
    <div className="">
      <div
        class="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class={`fixed ${
            showCart ? "" : "hidden"
          }  inset-0 bg-black bg-opacity-75 transition-opacity`}
        ></div>
        <div
          class={`fixed ${
            showCart ? "" : "transform translate-x-full"
          } transition-all duration-300  inset-0 overflow-hidden"`}
        >
          <div class="absolute  inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div class="pointer-events-auto w-screen max-w-md">
                <OutsideClickHandler onOutsideClick={() => setShowCart(false)}>
                  <div
                    class={`flex transition-all duration-300 h-[94vh] mt-16  ${
                      showCart ? "ml-0" : "ml-[500px]"
                    } flex-col overflow-y-auto bg-white  shadow-xl`}
                  >
                    <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <h2
                          class="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Carrito de compras
                        </h2>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span class="sr-only">Close panel</span>
                            <svg
                              onClick={() => setShowCart(false)}
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul
                            role="list"
                            class="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product, key) => {
                              return (
                                <li key={key} class="flex py-6">
                                  <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                      class="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div class="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{product.name}</a>
                                        </h3>
                                        <p class="ml-4">
                                          ${product.price * product.quantity}
                                        </p>
                                      </div>
                                      {/* <p class="mt-1 text-sm text-gray-500">
                                      Salmon
                                    </p> */}
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                      <p class="text-gray-500">
                                        Cant:{" "}
                                        <span className="font-bold text-gray-500">
                                          {product.quantity}
                                        </span>
                                      </p>

                                      <div class="flex">
                                        <button
                                          onClick={() => deleteItem(product)}
                                          type="button"
                                          class="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Quitar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalCart}</p>
                      </div>
                      {/* <p class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
                      <div class="mt-6">
                        <a
                          href="#"
                          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Pagar
                        </a>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            onClick={() => setShowCart(false)}
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continuar comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default Cart;
