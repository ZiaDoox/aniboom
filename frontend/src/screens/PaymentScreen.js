import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('cod')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Méthode de paiement</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Choisir votre méthode</Form.Label>
          <Col>
            {<Form.Check
              type='switch'
              label='Cash On Delivery'
              id='cod'
              name='cashOnDelivery'
              value='cod'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continuer
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
