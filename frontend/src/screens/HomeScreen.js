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
import CategoryShowcase from '../components/CategoryShowcase'

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
      <Row className=" mt-5">
        <Col md={3} sm={12} lg={3}>
          <CategoryShowcase categoryTitle="Chiens" categoryDescription="Description" 
          imgURL="https://www.transparentpng.com/thumb/dog/dog-amazing-image-download-31.png"></CategoryShowcase>
        </Col>
        <Col md={3}>
          <CategoryShowcase categoryTitle="Chats" categoryDescription="Description"
          imgURL={process.env.PUBLIC_URL + '/images/cat.png'}></CategoryShowcase>
        </Col>
        <Col md={3}>
          <CategoryShowcase categoryTitle="Oiseaux" categoryDescription="Description"
          imgURL={process.env.PUBLIC_URL + '/images/bird.png'}></CategoryShowcase>
        </Col>
        <Col md={3}>
          <CategoryShowcase categoryTitle="Aquarium" categoryDescription="Description"
          imgURL={process.env.PUBLIC_URL + '/images/fish.png'}></CategoryShowcase>
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
