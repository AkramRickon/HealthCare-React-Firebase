import React from 'react';
import slider1 from '../../images/Slider/1.jpg';
import slider2 from '../../images/Slider/2.jpg';
import slider3 from '../../images/Slider/3.jpg';
import slider4 from '../../images/Slider/5.jpg';
import slider5 from '../../images/Slider/6.jpg';

import { Carousel, Container } from 'react-bootstrap';


const Slider = () => {
    return (

        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    height="500px"
                    src={slider4}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;