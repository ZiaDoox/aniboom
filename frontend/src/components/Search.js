import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import {
  listProducts
} from '../actions/productActions'
import Loader from './Loader'

const Search = ({ history, match }) => {
    const pageNumber = match.params.pageNumber || 1
    const keyword = match.params.keyword

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    return (
        
        <>
        {loading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error}</Message>
        ) : (
            <Container className="mt-5 mb-5 p-0">
            <Row className="d-flex justify-content-center">
              {products.map((product) => (
                <Col md={10} key={product._id}>
                <Row className="p-2 border rounded categorysc-card">
                  <Col className="mt-1" md={3}>
                    <img className="img-fluid ig-responsive rounded product-img" src={product.image}/>
                  </Col>
                  <Col className="mt-1" md={6}>
                    <h5 className="product-title">{product.name}</h5>
                    <div className="d-flex flex-row">
                      <div className="ratings mr-2">
                        <i className="fa fa-start"></i>
                      </div>
                      <p className="text-justify para mb-0 mt-2">{product.description}</p>
                    </div>
                  </Col>
                  <Col className="align-items-center align-content-center border-left mt-1" md={3}>
                    <div className="d-flex flex-row align-items-center">
                      <h4 className="mr-1 product-price">MAD{product.price}</h4>
                    </div>
                    <h6 className="text-success">Free Shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      <a className="btn btn-primary btn-sm btn-details" href={`/product/${product._id}`}>Details</a>
                      <button 
                        onClick={() => {
                          history.push(`/cart/${product._id}?qty=${1}`)
                        }}
                        disabled={product.countInStock === 0} 
                        className="btn btn-outline-primary btn-atc btn-sm mt-2" 
                        type="button"
                        >Ajouter au panier</button>
                      <p className="mt-4">{product.countInStock > 0 ? 'In Stock ' : 'Out Of Stock'}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              ))}
              
            </Row>
          </Container>
        
        )}
          </>
    )
}
export default Search