
import logo from '../../images/logo.jpg';
import Container from 'react-bootstrap/Container';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import ToggoleButton from '../ToggleButton/ToggoleButton';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
  const { user, logout } = useContext(AuthContext);


  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <img className='logo' src={logo} alt="" />
          <Navbar.Brand className="title" >A Teaching Tone</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <NavLink to='/home'>Home</NavLink>

              <NavLink to='/course'>Courses</NavLink>
              <NavLink to='/faq'>FAQ</NavLink>
              <NavLink to='/blog'>Blog</NavLink>


            </Nav>
            <div className='toggle'><ToggoleButton rounded={true}></ToggoleButton></div>



            <NavLink>{user?.uid ?
              <>
                {['bottom'].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        {user?.displayName} 
                      </Tooltip>
                    }
                  >
                    {/* <Button variant="secondary">Tooltip on {placement}</Button> */}

                       <Image style={{ height: '30px' }} roundedCircle
                  src={user?.photoURL}>
                </Image>
                  </OverlayTrigger>
                ))}

             

              </>
              : <FaUser></FaUser>
            }</NavLink>
            <NavLink>   <p>{user?.displayName}</p></NavLink>

            <NavLink>
              {user?.uid ?
                <div>
                  {/* <>{user?.displayName}</> */}
                  <Button onClick={logout}>LogOut</Button>
                </div>
                :
                <><NavLink to='/login'>LogIn</NavLink></>

              }
            </NavLink>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;