
import logo from '../../images/logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';


const Header = () => {
  const { user, logout } = useContext(AuthContext);

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

            {/* <NavLink to='/signup'>SignUp</NavLink> */}
          </Nav>


          <NavLink>
            {user ?
              <>{user.displayName}</>
              :
              <><NavLink to='/login'>LogIn</NavLink></>

            }
          </NavLink>

          
          <NavLink>{user ?
            <>
              <Image style={{ height: '30px' }} roundedCircle
                src={user?.photoURL}>
              </Image>
              <Button onClick={logout}> Logout</Button>
            </>
            : <FaUser></FaUser>
          }</NavLink>


        </Container>
      </Navbar>
    </div>
  );
};

export default Header;