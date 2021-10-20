import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HospitalService from './HospitalService/HospitalService';

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
                <h3 className="text-center my-5">Our Services</h3>
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