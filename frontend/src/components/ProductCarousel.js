import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Row, Col, Button, Form, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useHistory } from 'react-router-dom'
import Rating from './Rating'

const ProductCarousel = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])



  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-light'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
           <Row className='w-100'>
            <Col md={6} lg={6}>
              <Image src={product.image} fluid/>
            </Col>  
            <Col  md={6} lg={6}>
              <div className='productInfoTab h-100 w-100'>
                <Row className='mt-3'>
                  <Col className='productInfoTab-header' md={12} sm={12} lg={12}>
                    <h6 className='pit-category'>{product.category}</h6>
                    <h2 className='pit-name'>{product.name}</h2>
                  </Col>
                                
                </Row>
                <Link to={`/product/${product._id}`}>

                <Row className='ml-5 mr-5'>
                  <Col>
                    <h6 className='pit-description-header'>Description</h6>
                    <p className='pit-description'>{product.description}</p>
                  </Col>
                </Row>
                </Link>
                <Row className='justify-content-center'>
                  <Rating 
                    value={product.rating}
                    />
                </Row>
                <Row>
                  <Col className='text-center'>
                    <h6 className='pit-price-header'>Prix:</h6>
                    <p className='pit-price-total'> {product.price}<span className='currency'>DH</span></p>
                  </Col>
                  
                </Row>
                <Row>
                  <Col className='text-center m-3'>
                    <Button 
                      className='atcBtn rounded'
                      onClick={() => {
                        history.push(`/cart/${product._id}?qty=${1}`)
                      }}>Ajouter au panier</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
