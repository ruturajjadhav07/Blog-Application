import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const CustomNavbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand
          href="/"
          className="ms-4"
          style={{ fontFamily: "gt-super", padding: "0px", fontSize: "26px" }}
        >
          BlogSpot
        </NavbarBrand>
        <Nav className="justify-content-center" navbar>
          <NavItem>
            <NavLink href="#" className="active">
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login" className="active">
              Write
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup" className="active">
              Join Us
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
