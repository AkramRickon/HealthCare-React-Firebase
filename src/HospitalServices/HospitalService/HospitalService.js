import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const HospitalService = (props) => {
    const {name,photo,services,serviceTime,contact,doctors}=props.hospitalService;
    console.log(props);
    return (
        <CardGroup>
            <Card className="border-0 shadow">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className="text-center"><small> {name} </small></Card.Title>
                    <Card.Text className="text-center">
                        <small ><span className="fw-bold">Services : </span>{services}</small><br/>
                        <small className="fw-bold fs-6 text-success">Doctors{doctors}</small><br/>
                        <small className="fs-6 fw-bold text-warning">Visiting Time : {serviceTime}</small><br/>
                       
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center border-0 bg-white">
                    <small className="text-center fw-bold fs-6 text-center">Contact : {contact}</small>
                </Card.Footer>
            </Card>


        </CardGroup>
    );
};

export default HospitalService;