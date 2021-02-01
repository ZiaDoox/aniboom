import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const CategoryScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products} = productList

  const category = match.params.category

  return (
    <>
      <Meta />
      <h1>Espaces {category}</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Container className="mt-5 mb-5 p-0">
            <Row className="d-flex justify-content-center">
              {products.filter(function(product) {
                return product.category === category;
              }).map((product) => (
                <Col md={10} key={product._id}>
                <Row className="p-2 border rounded">
                  <Col className="mt-1" md={3}>
                    <img className="img-fluid ig-responsive rounded product-img" src={product.image}/>
                  </Col>
                  <Col className="mt-1" md={6}>
                    <h5>{product.name}</h5>
                    <div className="d-flex flex-row">
                      <div class="ratings mr-2">
                        <i class="fa fa-start"></i>
                      </div>
                      <p className="text-justify text-truncate para mb-0 mt-2">{product.description}</p>
                    </div>
                  </Col>
                  <Col className="align-items-center align-content-center border-left mt-1" md={3}>
                    <div className="d-flex flex-row align-items-center">
                      <h4 className="mr-1">MAD{product.price}</h4>
                    </div>
                    <h6 className="text-success">Free Shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <button className="btn btn-primary btn-sm" type="button">Details</button>
                      <button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to cart</button>
                      <p className="m-2">Stock: {product.countInStock > 0 ? product.countInStock : 'Out Of Stock'}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              ))}
              
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default CategoryScreen
