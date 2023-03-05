import React, { useContext, useState } from "react";
import Auth from "./Auth";
import OutsideClickHandler from "react-outside-click-handler";
import CartContext from "../context/CartContext";
import Cart from "./Cart";
import AuthContext from "../context/AuthContext";
import Avatar from "./Avatar";

const Menu = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [isOpenAuth, setisOpenAuth] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { totalItems } = useContext(CartContext);
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);

  return (
    <>
      <Avatar isOpenAvatar={isOpenAvatar} setIsOpenAvatar={setIsOpenAvatar} />
      <div className="navbar  bg-base-100 fixed z-50 top-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">CAROLCELL</a>
        </div>
        <div className="flex-none">
          <div
            onClick={() =>
              user ? setShowCart(!showCart) : setisOpenAuth(true)
            }
            className="dropdown dropdown-end"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                <span className="badge badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </label>
            {/* <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button
                    onClick={() => setShowCart(!showCart)}
                    className="btn btn-primary btn-block"
                  >
                    Ver carrito
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mx-2">{user ? user.username : ""}</div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user && user.avatar.length > 0 ? (
                  <img src={user.avatar} alt="My Image" />
                ) : (
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li onClick={() => setIsOpenAvatar(true)}>
                <a>Cambiar foto</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
              <li onClick={() => (user ? logoutUser() : setisOpenAuth(true))}>
                <a> {user ? "Cerrar sesion" : "Iniciar sesión"}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <Auth isOpen={isOpenAuth} setIsOpen={setisOpenAuth} />
    </>
  );
};

export default Menu;
