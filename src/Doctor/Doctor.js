import React from 'react';
import { CardGroup, Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    const { name, photo, designation, fees, visitingTime } = props.doctor;
    return (
        <CardGroup>
            <Col>
                <Card className="text-center border-0 shadow">
                    <Card.Img variant="top" src={photo}  className="doctor-image-size p-3"/>
                    <Card.Body>
                        <Card.Title className=""><small className="fw-bold">{name}</small></Card.Title>
                        <Card.Text>
                            <small>{designation}</small><br/>
                            <small>{visitingTime}</small><br/>
                            <small>{fees}</small><br/>

                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </Col>
        </CardGroup>
    );
};

export default Doctor;