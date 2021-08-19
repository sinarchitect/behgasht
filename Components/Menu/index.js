import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import Styles from "./index.module.css"
const Menu = (props) => {
    return (<><Navbar style={{ direction: "rtl" }} bg="dark" variant="dark">

        <Navbar.Brand href="#home"><img height="48px" src="/img/Logo.png" /></Navbar.Brand>
        <Nav>
       
                <Nav.Link className={`${Styles.Navs} mx-2`} href="#home">خانه</Nav.Link>

   
        
                <Nav.Link className={`${Styles.Navs} mx-2`}   href="#features">خدمات</Nav.Link>

  

                <Nav.Link className={`${Styles.Navs} mx-2`} href="#contactus">تماس با ما</Nav.Link>

     

                <Nav.Link  className={`${Styles.Navs} mx-2`} href="#pricing">تعرفه</Nav.Link>
          

        </Nav>

    </Navbar>{props.children}</>);
}

export default Menu;