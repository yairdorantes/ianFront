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
                    src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"
                    alt=""
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li> */}
              <li onClick={() => setIsOpenAvatar(true)}>
                <a>Cambiar foto</a>
              </li>
              {/* <li>
                <a>Logout</a>
              </li> */}
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
