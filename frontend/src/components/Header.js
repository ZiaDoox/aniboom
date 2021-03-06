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
      <div className="alert alert-primary alert-dismissible fade show announcement-top-bar" role="alert">
        <p className="d-md-block">Paiement à la livraison disponible<i class="fas fa-shipping-fast ml-2"></i></p>
      </div>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect className="py-0">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src={process.env.PUBLIC_URL + '/images/ani.png'}
                width="300"
                height="75"
                className="d-inline-block align-top"/>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Nav.Link>Acceuil</Nav.Link>
              </LinkContainer>
                <NavDropdown title="Categories" id='nos-univers'>
                  <LinkContainer to="/products/Chiens">
                    <NavDropdown.Item>
                      Chiens
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/Chats">
                    <NavDropdown.Item>
                      Chats
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/Aquariophilie">
                    <NavDropdown.Item>
                      Aquariophilie
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/Reptiles">
                    <NavDropdown.Item>
                      Reptiles
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/products/Oiseaux">
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
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav className='ml-auto'>
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
                    Se deconnecter
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Se connecter
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
  </>
  )
}

export default Header
