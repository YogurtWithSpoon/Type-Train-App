import React from "react";
import { Keyboard, BrightnessHigh, Moon } from "react-bootstrap-icons";
import { Navbar, Form } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux'
import {switchTheme} from '../../store/themeslice'
import {setDefaultTheme} from '../../helpers'
function Header() {
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch();
  return (
    <Navbar variant="light justify-content-between" >
      <Navbar.Brand style={{color: theme ? 'white' : 'black' }}>
        <Keyboard size={40} className="mr-3"/>
        Typing Test App
      </Navbar.Brand>
      <Form inline>
        <BrightnessHigh />
        <Form.Check
          type="switch"
          id="switch_theme"
          checked={theme}
          onChange={() => {
            dispatch(switchTheme(!theme))
            setDefaultTheme(!theme)
            }
          }
        />
        <Moon />
      </Form>
    </Navbar>
  );
}

export default Header;
