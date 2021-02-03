import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import HeroCarousel from '../components/HeroCarousel'
import MapContainer from '../components/MapContainer'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <HeroCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <Row className=" mt-5" id="showcase">
        <Col md={3}>
          <LinkContainer to='/category/Chiens'>
          <Card className='my-3 p-3 rounded'>
            <img src="https://www.transparentpng.com/thumb/dog/dog-amazing-image-download-31.png" alt="Dog Amazing Image Download 31 @transparentpng.com" />
            <Card.Body>
              <Card.Title as='div'>
                <strong><span className="card-focus">Chiens</span><br></br>Offres et Promos</strong>
              </Card.Title>

            </Card.Body>
          </Card>
          </LinkContainer>
        </Col>
        <Col md={3}>
          <LinkContainer to='/category/Chats'>
            <Card className='my-3 p-3 rounded'>
              <Card.Img src={process.env.PUBLIC_URL + '/images/cat.png'} variant='top' />

              <Card.Body>
                <Card.Title as='div'>
                  <strong><span className="card-focus">Chats</span><br></br>Alimentation et Mode</strong>
                </Card.Title>
              </Card.Body>
            </Card>
            </LinkContainer>
        </Col>
        <Col md={3}>
          <LinkContainer to='/category/Oiseaux'>
            <Card className='my-3 p-3 rounded'>
              <Card.Img src={process.env.PUBLIC_URL + '/images/bird.png'} variant='top' />

              <Card.Body>
                <Card.Title as='div'>
                  <strong><span className="card-focus">OISEAUX</span><br></br>Aliments Vitamines</strong>
                </Card.Title>

              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
        <Col md={3}>
          <LinkContainer to="/category/Aquarium">
            <Card className='my-3 p-3 rounded'>
              <Card.Img src={process.env.PUBLIC_URL + '/images/fish.png'} variant='top' />

              <Card.Body>
                <Card.Title as='div'>
                  <strong><span className="card-focus">Aquarium</span><br></br>Aliments et Accessoires</strong>
                </Card.Title>
              </Card.Body>
            </Card>
          </LinkContainer>
        </Col>
      </Row>
      <div>
      <h1 className="section_title">Nouvelles Arrivées</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
      </div>
      
      <h1>Ou nous trouver?</h1>
      <div className="map mb-5 mt-5">
        <MapContainer></MapContainer>
      </div>
    </>
  ) 
}

export default HomeScreen
