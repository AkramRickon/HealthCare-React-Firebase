import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HospitalService.css';

const HospitalService = (props) => {
    const {name,photo,services,serviceTime,contact,doctors}=props.hospitalService;
    console.log(props);
    return (
        <CardGroup>
            <Card className="border-0 shadow rounded">
                <Card.Img variant="top" src={photo}  className="service-card-size"/>
                <Card.Body>
                    <Card.Title className="text-center"><small> {name} </small></Card.Title>
                    <Card.Text className="">
                        <small ><span className="fw-bold fs-6 text-secondary">Services : </span><span className="text-secondary fs-6">{services}</span></small><br/><br/>

                        <small className="fw-bold fs-6 text-secondary ">Doctors : <span className="text-success">{doctors}</span></small><br/>
                        <br/>
                        <small className="fs-6 fw-bold text-center text-secondary">Service Time : 
                         <span className="text-danger "> {serviceTime}</span></small><br/>
                       
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" border-0 bg-white pb-3">
                    <small className=" fw-bold fs-6 text-secondary ">Contact : <i className="fas  text-danger fa-phone-alt"></i> <span className="text-primary">{contact}</span></small>
                </Card.Footer>
            </Card>


        </CardGroup>
    );
};

export default HospitalService;