import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'

const HeroCarousel = () => {
  return (
    <Carousel fade={true} pause='hover'className='carouselP'>
        <LinkContainer to='/products/Chiens'>
          <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + '/images/sliderpets.jpg'} className="heroImg img-fluid" fluid />
          </Carousel.Item>
        </LinkContainer>

        
        {/* <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/sliderpets2.png'} className="heroImg img-fluid"fluid />
        </Carousel.Item> */}
        {/*
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/slogan3.jpg'} className="heroImg img-fluid"fluid />
        </Carousel.Item>
        */}
    </Carousel>
  )
}

export default HeroCarousel
