import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { useHistory } from 'react-router-dom'



const Product = ({ product  }) => {
const history = useHistory()
const addToCartHandler = () => {
  history.push(`/cart/${product._id}?qty=${1}`)
}
  return (
    <Card className='my-3 p-3 rounded product-card'>
      <Link to={`/product/${product._id}`} className="product-img">
        <Card.Img className='img-fluid'src={product.image} fluid variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className="product-title mb-4">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className="product-review">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className="product-price">
          <span className="old-price mr-2">{product.price === 0 ? ' ' : product.price + (product.price * 0.25)}</span>
          {product.price}DH
          </Card.Text>
          <Button className='rounded atcBtn' onClick={addToCartHandler}variant='primary'>Ajouter au panier</Button>

      </Card.Body>
    </Card>
  )
}

export default Product
