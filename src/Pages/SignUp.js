import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Components/Home.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import userSignup from "../Server Service/userSignup";

const SignUp = () => {
  const [userRegister, setUserRegister] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // useEffect(() => {
  //   console.log(userRegister);
  // }, [userRegister]);

  const Change = (e, property) => {
    setUserRegister({ ...userRegister, [property]: e.target.value });
  };

  const Reset = () => {
    setUserRegister({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  const Submit = (e) => {
    // submit
    e.preventDefault();
    // console.log(userRegister);

    //data validation then
    // call the server

    // Call Signup
    userSignup(userRegister)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log("Error")
      });
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
            {/* {userRegister.email}  to check*/}
            <div className=" d-flex justify-content-center align-items-center">
              <div className="card shadow-lg p-4" style={{ width: "100%" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Sign In</h4>
                    <button
                      type="button"
                      className="btn-close"
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
                        onChange={(e) => Change(e, "email")}
                        value={userRegister.email}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter your password"
                        onChange={(e) => Change(e, "username")}
                        value={userRegister.username}
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
                        onChange={(e) => Change(e, "password")}
                        value={userRegister.password}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="Confirm-password"
                        placeholder="Confirm Password"
                        onChange={(e) => Change(e, "confirmPassword")}
                        value={userRegister.confirmPassword}
                        required
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginRight: "13px" }}
                        onClick={Submit}
                      >
                        Sign Up
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={Reset}
                      >
                        Reset
                      </button>
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

export default SignUp;
