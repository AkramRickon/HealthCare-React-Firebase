import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark">
            <Container>
                {/* Footer is devided into three columns */}
                <Row xs={1} md={3} className="g-4">
                    <Col className="text-white">
                        <ul>
                            <li><h5>ADDRESS</h5></li>
                        </ul>
                        <ul>
                            <li><h6>House#15-19</h6></li>
                            <li><h6>Block-E, Banasree</h6></li>
                            <li><h6>Main Road, Rampura</h6></li>
                            <li><h6>Dhaka-1219</h6></li>
                        </ul>
                    </Col>

                    <Col>
                        <div className="text-center text-white ">
                            <h5>FOLLOW US</h5>
                            <div>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-youtube"></i>
                                <i className="fab fa-facebook"></i>
                            </div>

                        </div>
                    </Col>

                    <Col className="text-end text-white">
                        <h5>CONTACT US</h5>
                        <h6  className="phone-num-color "><i className="fas fa-phone-alt"></i>+88 58050442-3</h6>
                        <h6 className="phone-num-color "><i className="fas fa-phone-alt"></i>+8801944480902</h6>
                        <h6>24 hours (seven days a week)</h6>
                        <h6><i className="far fa-envelope me-2"></i>medPlus_hospital@gmail.com</h6>
                    </Col>
                </Row>
            </Container>
            <p className="text-center  mb-0 copyright-bg text-secondary py-1">©Copyright 2017-2021 | MedPLus Hospital</p>
        </div>

            
        </div>
    );
};

export default Footer;