import './Home.css';
import img1 from '../images/Gallery/01.png';
import img2 from '../images/Gallery/02.png';
import img3 from '../images/Gallery/03.png';
import img4 from '../images/Gallery/04.png';
import img5 from '../images/Gallery/05.png';
import img6 from '../images/Gallery/06.png';

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import DoctorsOfHomePage from './DoctorsOfHomePage/DoctorsOfHomePage';
import Slider from './Slider/Slider';

const Home = () => {

    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setAllDoctors(data))
    }, [])
    const services = allServices.slice(0, 6);
    const doctors = allDoctors.slice(0, 4);


    return (
        <>
         <Slider></Slider>
        <Container className="">
           
            <h3 className="text-center my-5">Our services</h3>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </Row>

                <h3 className="text-center my-5">Our Doctors</h3>

                <Row xs={1} md={2} lg={4} className="g-5 mb-5">
                    {
                        doctors.map(doctor => <DoctorsOfHomePage doctor={doctor} key={doctor.id}></DoctorsOfHomePage>)
                    }
                </Row>
                <h3 className="text-center my-5">Gallery</h3>
                <Row xs={1} md={2} lg={3} className="g-5 mb-5">
                    <Col>
                        <img src={img1} alt="" className="img-fluid"></img>
                    </Col>
                    <Col>
                        <img src={img2} alt="" className="img-fluid"></img>
                    </Col>
                    <Col>
                        <img src={img3} alt="" className="img-fluid"></img>
                    </Col>
                    <Col>
                        <img src={img4} alt="" className="img-fluid"></img>
                    </Col>
                    <Col>
                        <img src={img5} alt="" className="img-fluid"></img>
                    </Col>
                    <Col>
                        <img src={img6} alt="" className="img-fluid"></img>
                    </Col>
                </Row>

            </Container>
        </Container>
        </>
    );
};
export default Home;