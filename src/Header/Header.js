import React from 'react';
import logo from '../images/logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
       <Navbar bg="dark" variant="dark">
        <Container>
        <img className='logo' src={logo} alt="" />
        
          <Navbar.Brand href="#home">A Teaching Tone</Navbar.Brand>
         
          <Nav className="mx-auto">
            <NavLink to='/home'>Home</NavLink>
           
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/login'>LogIn</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;