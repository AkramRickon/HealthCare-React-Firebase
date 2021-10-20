import React from 'react';
import './HospitalServices.css'
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HospitalService from './HospitalService/HospitalService';

// THis component is headers Service component 

const HospitalServices = () => {

    const [hospitalServices, setHospitalServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setHospitalServices(data))
    }, [])

    // console.log(hospitalServices)

    return (
        <div>
            <Container className=" pb-5">
                <h2 className="text-center mt-5">Our All Services</h2>
                <div className="line3 mb-5 mx-auto"></div>
                <Container>
                <Row xs={1} md={2} lg={2} className="g-5">
                {
                    hospitalServices.map(hospitalService => <HospitalService hospitalService={hospitalService} key={hospitalService.id}></HospitalService>)
                }
            </Row>
                </Container>
            </Container>
        </div>
    );
};

export default HospitalServices;