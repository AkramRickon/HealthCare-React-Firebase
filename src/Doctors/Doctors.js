import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res=>res.json())
        .then(data =>setDoctors(data))
    },[])


    return (
        <div className="my-5">
            <h3 className="text-center my-5">Our Doctors</h3>

           <Container>
               <Row xs={1} md={2} lg={4} className="g-5">
               {
                doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
               </Row>
           </Container>
        </div>
    );
};

export default Doctors;