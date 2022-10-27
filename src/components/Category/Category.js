import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './category.css';
import { HiDocument } from "react-icons/hi";
import jsPDF from 'jspdf';



const Category = () => {
    const course = useLoaderData();


    const handlePdf = () => {
        const doc = jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(course.image, 65, 20, 500, 400);
        doc.addPage()
        doc.text(course.name, 60, 60)
        doc.text(course.price, 60, 80)
        doc.text(course.description.slice(0, 200), 60, 100)


        doc.save('a.pdf');

    }


    return (
        <div>

            <div className='m-5 border rounded'>


                <Card className='card'>
                    <p>DownLoad pdf<HiDocument onClick={handlePdf} ></HiDocument></p>
                    <h1 className='text-center color w-50'>{course.name}</h1>
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                        <Card.Title><h2>{course.title}</h2></Card.Title>
                        <Card.Text>
                            {course.description}
                        </Card.Text>

                      <Link to={`/check/${course.id}`}> <Button className='fw-bold'>Get Premium Access</Button> </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default Category;