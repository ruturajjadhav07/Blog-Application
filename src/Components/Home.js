import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Login from "./Login";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="ms-4">
          Reactstrap
        </NavbarBrand>
        <Nav className="justify-content-center" navbar>
          <NavItem>
            <NavLink href="#" className="active">
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="active">
              Write
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={toggleModal} className="active">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/SignUp" className="active">
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div
        style={{
          backgroundColor: "beige",
          height: "calc(100vh - 56px)",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontFamily:
              "gt-super, Georgia, Cambria, Times New Roman Times, serif",
            marginTop: "90px",
            marginLeft: "40px",
          }}
        >
          <p style={{ fontSize: "80px" }}>Unleash Your Voice 🌟</p>
          <p style={{ fontSize: "70px" }}>Write, Share, and Inspire 📝✨</p>
          <button
            type="button"
            onClick={toggleModal}
            style={{fontSize: "20px",borderRadius: "4px",color: "beige",backgroundColor: "black",border: "none",padding: "3px 14px",marginTop: "120px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      {showModal && <Login toggleModal={toggleModal} />}
    </div>
  );
};

export default Home;
