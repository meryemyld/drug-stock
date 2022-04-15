import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { FaBriefcaseMedical } from 'react-icons/fa';

export default class Navbar1 extends Component {
  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
           <FaBriefcaseMedical/> Faruk Eczanesi
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
