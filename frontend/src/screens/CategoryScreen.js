import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button, Form} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import ProductCardLong from '../components/ProductCardLong'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'

import { listProducts } from '../actions/productActions'

const CategoryScreen = ({ history, match }) => {

  const pageNumber = match.params.pageNumber || 1
  const keyword = match.params.keyword

  let sortMethod = match.params.sortMethod || ''

  

  const dispatch = useDispatch()  
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, sortMethod))
}, [dispatch, keyword, pageNumber, sortMethod])

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages} = productList
  const category = match.params.category
  const filteredProducts = products ? 
    products.filter(function(product) {
      return product.category === category;
    }) : {}
  let sortedProducts = []
  if(filteredProducts.length) {
    sortedProducts = [...filteredProducts];
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
              sortMethod = e.target.value
              history.push(`/products/${category}/${sortMethod}`)
            }}>
              <option value=''></option>
              <option value='priceDesc'>Prix - Croissant</option>
              <option value='priceAsc'>Prix - Décroissant</option>
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
          <ProductCardLong products={products} history={history} />
            <Paginate
            category={category}
            pages={pages}
            sortMethod={sortMethod}
            page={page}
            keyword={keyword ? keyword : ''}
      />
            
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
