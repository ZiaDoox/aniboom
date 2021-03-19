import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container, Button, Form} from 'react-bootstrap'


const ProductCardLong = (props, history) =>  {
    return (
        <Container className="mt-5 mb-5 p-0">
            <Row className="d-flex justify-content-center">
              {props.products.map((product) => (
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
                      <p className="text-justify para mb-0 mt-2">{product.description+'...'}</p>
                    </div>
                  </Col>
                  <Col className="align-items-center align-content-center border-left mt-1" md={3}>
                    <div className="d-flex flex-row align-items-center">
                      <h4 className="mr-1 product-price">MAD{product.price}</h4>
                    </div>
                    <h6 className="text-success"><small>livraison gratuite à partir de</small> 120DH</h6>
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
                    </div>
                  </Col>
                </Row>
              </Col>
              ))}
              
            </Row>
          </Container>
    )

}

export default ProductCardLong