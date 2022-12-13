import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function NavContent() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useNavigate();

  function logout() {
    setAuth(null);
    history("/");
  }

  return (
    <nav>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <NavLink to='/' exact className='main-brand-logo'>
          <Navbar.Brand>The Works of Shakespeare</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto navLinksContainer'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/favourites' className='nav-link'>
              Favourites
            </NavLink>
            <NavLink to='/contact' className='nav-link'>
              Contact
            </NavLink>

            {auth ? (
              <>
                <Link to='/admin' className='nav-link'>
                  Admin
                </Link>
                <button className='cta cta-logout' onClick={logout}>
                  Log out
                </button>
              </>
            ) : (
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default NavContent;
