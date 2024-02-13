import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Cart from "../screens/Cart";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleview = () => {
    setCartView(true);
  };
  const closeCartView = () => {
    setCartView(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-1 fst-italic" to="#">
          NOM_NOM_DASH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link fs-5" to="#">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item active">
                <Link className="nav-link fs-5" to="#">
                  MY Orders <span className="sr-only"></span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="login">
                LOGIN
              </Link>
              <Link className="btn bg-white text-success mx-1" to="create-user">
                SIGNUP
              </Link>
            </div>
          ) : (
            <div>
              <div
                className="bg-white text-success mx-2 btn"
                onClick={handleview}
              >
                My Cart{" "}
                {cartView ? <Modal onClose={()=>{setCartView(false)}}><Cart></Cart></Modal> : ""}
              </div>
              <div
                className="bg-white text-danger mx-2 btn"
                onClick={handleLogout}
              >
                LogOut
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
