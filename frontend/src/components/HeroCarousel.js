import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Link } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'

const HeroCarousel = () => {
  return (
    <Carousel fade={true} pause='hover'className='bg-light carouselP'>
        <Link to='products/Chiens'>
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/sliderpets.jpg'} className="heroImg img-fluid" fluid />
        </Carousel.Item>
        </Link>
        
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/sliderpets2.png'} className="heroImg img-fluid"fluid />
        </Carousel.Item>
        {/*
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/slogan3.jpg'} className="heroImg img-fluid"fluid />
        </Carousel.Item>
        */}
    </Carousel>
  )
}

export default HeroCarousel
