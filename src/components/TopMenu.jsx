import React from 'react';
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        secured
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Navbar.Form>
      <Nav>
        <NavItem>
          test
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopMenu;
