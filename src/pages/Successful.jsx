import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components";
import { NavLink } from "react-router-dom";

const Successful = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            Wardrobe Collection
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <button class="my-2 mx-auto btn btn-dark" type="submit">
          <Link
            to="/"
            className="text-decoration-underline text-info"
            class="text-decoration-none text-white"
          >
            Back to Home Page
          </Link>{" "}
        </button>
      </nav>
      <div className="container my-3 py-3" style={{ height: "400px" }}>
        <h1 className="text-center">Order Status</h1>
        <hr />
        <h4 className="text-center" style={{ marginTop: "100px" }}>
          Order Placed Successfully...
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Successful;
