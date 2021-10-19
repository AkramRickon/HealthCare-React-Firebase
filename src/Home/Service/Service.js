import './Service.css';
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, details, photo ,category} = props.service;
    return (
            <CardGroup>
                <Card className="border-0 shadow">
                    <Card.Img variant="top" className="img-size" src={photo} />
                    <Card.Body className="text-center">
                        <Card.Title><small>{name}</small></Card.Title>
                        <Card.Text>
                           <small>{details}</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-white text-center">
                        <Link to={`/serviceDetails/${category}`}><Button className="px-4 py-1 btn btn-secondary">Details</Button></Link>
                    </Card.Footer>
                </Card>
            </CardGroup> 
    );
};
export default Service;