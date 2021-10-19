import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { category } = useParams()

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [allServices])

    const matchedService = allServices.filter(service => service.category === category);
    console.log(matchedService);

    return (
        <div className="">
            <h2 className="my-3 text-center"> Service Details</h2>
            <Row className="w-75 mx-auto my-5  ">
                <Col xs={12} md={6} className="text-center">
                    <img src={matchedService[0]?.photo} alt="" className="img-fluid"></img>
                </Col>
                <Col xs={12} md={6} className="p-3 text-format">
                    <h3>{matchedService[0]?.name}</h3>
                    <p>{matchedService[0]?.services}</p>
                    <h5>Service Time : {matchedService[0]?.serviceTime}</h5>
                    <h5>Doctors : {matchedService[0]?.doctors}</h5>
                    <h5>Contact : {matchedService[0]?.contact}</h5>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceDetails;