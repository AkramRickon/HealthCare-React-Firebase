import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {

    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data =>setDoctors(data))
    },[])


    return (
        <Container className="my-5">
            <h2 className="text-center mt-5">Our Doctors</h2>
            <div className="line1 mb-5 mx-auto"></div>

           <Container>
               <Row xs={1} md={2} lg={4} className="g-5">
               {
                doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
               </Row>
           </Container>
        </Container>
    );
};

export default Doctors;