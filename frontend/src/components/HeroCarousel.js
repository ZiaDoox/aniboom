import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'

const HeroCarousel = () => {
  return (
    <Carousel fade="true"pause='hover' className='bg-light carouselP'>
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/slogan.jpg'} className="heroImg" fluid />
        </Carousel.Item>
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/slogan2.png'} fluid />
        </Carousel.Item>
        <Carousel.Item >
            <Image src={process.env.PUBLIC_URL + '/images/slogan.jpg'} fluid />
        </Carousel.Item>
    </Carousel>
  )
}

export default HeroCarousel
