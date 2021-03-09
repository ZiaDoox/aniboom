import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button, Form} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'

import { listProducts } from '../actions/productActions'

const CategoryScreen = ({ history, match }) => {

  const pageNumber = match.params.pageNumber || 1
  const keyword = match.params.keyword

  const dispatch = useDispatch()  
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
}, [dispatch, keyword, pageNumber])

  const productList = useSelector((state) => state.productList)
  const { loading, error, products} = productList
  const category = match.params.category
  const filteredProducts = products ? 
    products.filter(function(product) {
      return product.category === category;
    }) : {}
  
  const [sortedField, setSortedField] = React.useState(null);
  let sortedProducts = [...filteredProducts];
  
  if(sortedField !== null) {
    if(sortedField === 'price-d') {
      sortedProducts.sort((a,b) => {
        return a.price - b.price;
      });
    }else if(sortedField === 'inStock') {
      sortedProducts = sortedProducts.filter(function(product) {
        return product.countInStock > 0;
      })
    } else if (sortedField === 'price-a') {
      sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }

  return (
    <>
    <Container>
      <Meta />
      <Row>
        <h1 className='title'>Espace {category}</h1>
        <Form className='title'>
          <Form.Label>Trier par:</Form.Label>
          <Form.Control
            as='select'
            onChange={(e) => {
              setSortedField(e.target.value)
            }}>
              <option value=' '></option>
              <option value='price-d'>Prix - Croissant</option>
              <option value='price-a'>Prix - Décroissant</option>
              <option value='inStock'>Disponibilite</option>
          </Form.Control>
        </Form>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : sortedProducts.length ? (
        <>
          <Container className="mt-5 mb-5 p-0">
            <Row className="d-flex justify-content-center">
              {sortedProducts.map((product) => (
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
                      <p className="mt-4">{product.countInStock > 0 ? 'In Stock ' : 'Out Of Stock'}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              ))}
              
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <h6>Coming Soon</h6>
          </Container>
        </>
      )}
      </Container>
    </>
  )
}

export default CategoryScreen
