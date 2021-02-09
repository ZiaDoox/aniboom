import React from 'react'
import {Container} from 'react-bootstrap'


const ThankYouPage = () => {
    return(
        <>
        <Container>
            <h2 className='mt-5'>Thank you for your order!
            </h2>
            <p className='mt-2'>You will receive your package on x/x/x, processing time might take x business days</p>
            <p>Our customer service will call you for your confirmation</p>
            <p>If you have questions feel free to contact us</p>
        </Container>
        </>
    )
}

export default ThankYouPage