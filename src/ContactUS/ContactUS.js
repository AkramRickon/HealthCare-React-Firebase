import React from 'react';
import './ContactUS.css'
import { Col, Container, Row } from 'react-bootstrap';

const ContactUS = () => {
    return (
        <div className="mb-5">
            <Container>
                <h3 className="my-5 text-center">Contact US</h3>
                <h4 className="text-center my-5">WE ARE IN DHAKA, BANGLADESH</h4>
                <Row lg={4} md={2} xs={1} className="g-5 text-center">

                    <Col className="p-3 border-style">
                        <h1> <i className="fas fa-map-marked-alt text-success"></i></h1>
                        <h5>Hospital Locations</h5>
                        <h6>House#15-19, Block-E, Banasree, Main Road, Rampura, Dhaka-1219.</h6>

                    </Col>

                    <Col className="p-3 border-style">
                        <h1><i className="fas fa-phone-alt text-success"></i></h1>
                        <h6>Phone Number</h6>
                        <h6>+8802-83900010</h6>
                        <h6>Mobile Number</h6>
                        <h6>+88019522893329</h6>
                        <h6>Management Number</h6>
                        <h6>+88018454444446</h6>
                    </Col>
                    <Col className="p-3 border-style">
                        <h1><i className="fas fa-user-md text-success"></i></h1>
                        <h5>Career</h5>
                        <h6>Send your CV at</h6>
                        <h6>career.medPlus@gmail.com</h6>

                    </Col>
                    <Col className="p-3">

                        <h1> <i className="fas fa-envelope text-success"></i></h1>
                        <h5>Questions?</h5>
                        <h6>medPlus_hospital@gmail.com</h6>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUS;