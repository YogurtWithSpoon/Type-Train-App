import React from "react";
import { Keyboard, BrightnessHigh, Moon } from "react-bootstrap-icons";
import { Navbar, Form } from "react-bootstrap";

function Header() {
  return (
    <Navbar variant="light justify-content-between" >
      <Navbar.Brand>
        <Keyboard size={40} className="mr-3"/>
        Typing Test App
      </Navbar.Brand>
      <Form inline>
        <BrightnessHigh />
        <Form.Check
          type="switch"
          id="switch_theme"
        />
        <Moon />
      </Form>
    </Navbar>
  );
}

export default Header;
