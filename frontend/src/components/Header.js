import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, DropdownButton } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'


const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Navbar bg='light' variant='light' id="nav1" expand='lg' collapseOnSelect className="py-0 sticky-top">
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
              <LinkContainer to='/'>
                <Nav.Link>Acceuil</Nav.Link>
              </LinkContainer>
                <NavDropdown title="Categories" id='nos-univers'>
                  <LinkContainer to="/category/Chiens">
                    <NavDropdown.Item>
                      Chiens
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/Chats">
                    <NavDropdown.Item>
                      Chats
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/Aquariophilie">
                    <NavDropdown.Item>
                      Aquariophilie
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/Reptiles">
                    <NavDropdown.Item>
                      Reptiles
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/category/Oiseaux">
                    <NavDropdown.Item>
                      Oiseaux
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/services">
                    <Nav.Link>
                      Services
                    </Nav.Link>
                  </LinkContainer>
            </Nav>
            <Nav className='m-auto profile-nav'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                {cartItems.length}<i className='fas fa-shopping-cart'></i>
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
                <DropdownButton drop='left'title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </DropdownButton>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav id="nav2" className="hidden">
              <LinkContainer to="/category/Electronics">
                <Nav.Link>
                  Electronics
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Electronics">
                <Nav.Link>
                  Electronics
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/category/Electronics">
                <Nav.Link>
                  Electronics
                </Nav.Link>
              </LinkContainer>
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
              <LinkContainer to="/category/Oiseaux">
                <Nav.Link>
                  Oiseaux
                </Nav.Link>
              </LinkContainer>
            </Nav>
  </>
  )
}

export default Header
