import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components";
import { NavLink } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/");
  };

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
            to="/register"
            className="text-decoration-underline text-info"
            class="text-decoration-none text-white"
          >
            Register
          </Link>{" "}
        </button>
      </nav>
      <div className="container my-3 py-3">
        <h1 className="text-center">Personal Information</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Full Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="floatingInput"
                  value="Bandna Paikaray"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingPassword"
                  value="bandnapaikaray@gmail.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Address</label>
                <input
                  type="name"
                  class="form-control"
                  id="floatingPassword"
                  value="#123, Murlipura, Jaipur, Rajasthan, PIN-302039"
                />
              </div>
              {/* <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div> */}
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
