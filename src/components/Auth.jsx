import axios from "axios";
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import AuthContext from "../context/AuthContext";

import { api } from "../api";

console.log(api);
const customStyles = {
  content: {
    // color: "white",
    // width: "350px",
    // height: "350px",
    // backgroundColor: "#00000000",
    outline: "none",
  },
  overlay: { zIndex: 999, backgroundColor: "#18191ab1" },
};
const Auth = ({ isOpen, setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const [form, setForm] = useState({ username: "", password: "", email: "" });
  const authValidate = () => {
    if (isLogin) {
      loginUser(form);
    } else {
      axios
        .post(`${api}/signup`, form)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="">
      <Modal
        ariaHideApp={false}
        style={customStyles}
        className="z"
        isOpen={isOpen}
      >
        {/* <div>this is the modal</div> */}
        <div class="w-full mx-auto my-auto mt-52  max-w-xs">
          <OutsideClickHandler
            onOutsideClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Correo
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, ["email"]: e.target.value })
                  }
                  class="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="ejemplo@.com"
                />
              </div>
              {!isLogin && (
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Nombre de usuario
                  </label>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, ["username"]: e.target.value })
                    }
                    class="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="nombre de usuario"
                  />
                </div>
              )}
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Contraseña
                </label>
                <input
                  onChange={(e) =>
                    setForm({ ...form, ["password"]: e.target.value })
                  }
                  class="shadow bg-white appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p class="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <button
                  onClick={authValidate}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  {isLogin ? "Ingresar" : "Crear"}
                </button>
                <a
                  onClick={() => setIsLogin(!isLogin)}
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  {!isLogin ? "Ingresar" : "Crear"}
                </a>
              </div>
            </form>
            {isError && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Algo salio mal, intentalo de nuevo</span>
                </div>
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </Modal>
    </div>
  );
};

export default Auth;
