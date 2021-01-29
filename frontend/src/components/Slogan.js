import React, {useEffect} from 'react'
import { Carousel } from 'react-bootstrap'

const Slogan = () => {

    return (
        <Carousel pause="hover">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/images/slogan.jpg'}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slogan