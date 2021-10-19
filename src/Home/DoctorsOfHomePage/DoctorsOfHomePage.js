import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './DoctorsOfHomePage.css';

const DoctorsOfHomePage = (props) => {
    const {photo,name,designation}=props.doctor;
    return (
        <CardGroup>
            <Col>
                <Card className="shadow">
                    <Card.Img variant="top" src={photo}  className="photo-size w-75 mx-auto p-2"/>
                    <Card.Body className="text-center">
                            <p className="fw-bold">{name}</p>
                        <Card.Text>
                            <small>{designation}</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </CardGroup>
    );
};

export default DoctorsOfHomePage;