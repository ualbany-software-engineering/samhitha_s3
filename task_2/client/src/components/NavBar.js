import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
  NavLink
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>  {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">LOGO</NavbarBrand>
        <Fragment>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Profiles</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Fragment>
      </Navbar>
    </div>
  )
}

export default NavBar
