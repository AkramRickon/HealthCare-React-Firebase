import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mt-5 vh-100">
            <Container>
                    <h1><span className="text-danger ">404</span> <span className="text-warning">PAGE <br/>NOT FOUND</span></h1>
                    <div className="d-flex align-items-center justify-content-center mt-5">
                        <Link to="/home"><button className="btn btn-danger"><i className="fas fa-long-arrow-alt-left pe-2  fw-bold"></i>Back To Home</button></Link>
                    </div>
            </Container>
            
        </div>
    );
};

export default NotFound;