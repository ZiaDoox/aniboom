import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <div className="headertop">
        <Navbar bg='light' variant='light' expand='lg' collapseOnSelect className="py-0">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                width="80"
                height="100"
                className="d-inline-block align-top"/>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="mr-auto b-nav">
            <LinkContainer to="/category/Chiens">
                <Nav.Link>
                Chiens
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Chats">
                <Nav.Link>
                Chats
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Aquariophilie">
                <Nav.Link>
                Aquariophilie
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Reptiles">
                <Nav.Link>
                Reptiles
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Oiseaux">
                <Nav.Link>
                Oiseaux
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Rongeurs">
                <Nav.Link>
                Rongeurs
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>
                  Services
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className='ml-auto profile-nav'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

    </header>
  )
}

export default Header
