import React from 'react';

import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const { image, title, price } = useLoaderData()
    return (
        <div className='w-25 mx-auto my-5 py-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> <h3>{title}</h3> </Card.Title>
                    <Card.Text>
                        <h1>Price: {price}</h1>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CheckOut;