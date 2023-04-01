import React from 'react';
import Card from 'react-bootstrap/Card';
import SectionTitle from '../utility/SectionTitle';

const Specialty = () => {
    const specialtys = [
        {},
        {},
        {},
        {},
    ]
    return (
        <section className='container py-5'>
            <SectionTitle>
                <h2>this is a section title</h2>
                <p>this is a description title</p>
            </SectionTitle>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                {
                    specialtys.map(data => (
                        <div className="col ">
                            <Card className='w-100 border-0 specialtys-card'>
                                <Card.Img variant="top" src="assets/images/bg-2.jpg" />
                                <Card.Body className='position-relative'>
                                    <div className='d-flex justify-content-center'>
                                    <div className='specialtys-icon'><i className="fa-sharp fa-solid fa-car"></i></div>
                                    </div>
                                    <Card.Title className='text-center mt-4'>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default Specialty;