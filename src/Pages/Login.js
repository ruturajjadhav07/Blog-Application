import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const Login = () => {
  const [modal, setModal] = useState(false);
  let toggle = () => setModal(!modal);

  const [userdata, setUserData] = useState({
    // for user information
    name: "",
    password: "",
  });

  // change function

  const Change = (e, property) => {
    setUserData({ ...userdata, [property]: e.target.value });
  };

  const SubmitForm = (e) => { // submit form and check data in console
    e.preventDefault();
    console.log(userdata);

    //data validation then 
    // call the server
  };

  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        display: "block",
        background: "rgba(0, 0, 0, 0.5)", // Dimmed background
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
            {/* to check it is changing or not value  */}
            {/* {userdata.name}{userdata.password} */}
            <div className="d-flex justify-content-center align-items-center">
              <div className="card shadow-lg p-4" style={{ width: "100%" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Sign In</h4>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggle}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form onSubmit={SubmitForm}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => Change(e, "name")} //onChange
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
                        onChange={(e) => {
                          Change(e, "password"); //onChange
                        }}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <a href="#" className="text-muted">
                        Forgot password?
                      </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <button type="submit" className="btn btn-primary w-100">
                        Sign in
                      </button>
                    </div>
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
