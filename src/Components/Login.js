import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.css" 

const Login = ({ toggleModal }) => {
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      // tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="modal-dialog d-flex justify-content-center align-items-center"
        style={{ minHeight: "92vh" }}
      >
        <div
          className="modal-content"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div>
            <div className=" d-flex justify-content-center align-items-center">
              <div className="card shadow-lg p-4" style={{ width: "100%" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Sign In</h4>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <a href="#" className="text-muted">
                        Forgot password?
                      </a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Sign in
                    </button>
                    <div className="d-flex justify-content-center mt-3">
                      <p className="mb-0">
                        Not a member? <a href="#">Register</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
