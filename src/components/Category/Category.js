import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='m-5 pb-3'>
            <h1 className='text-center'>{course.name}</h1>
            <Card>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title><h2>{course.title}</h2></Card.Title>
                    <Card.Text>
                        {course.description}
                    </Card.Text>

                    <h1>Price: {course.price}</h1>
                    <Button variant="primary">Get Premium Access</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;