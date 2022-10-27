import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';



const Course = () => {
    const courses = useLoaderData();
    return (
        <div className="m-5">
            <container>
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>

                    <Col lg={8}>
                      
                        {
                            courses.map(course => <RightSide key={course.id} course={course}></RightSide>)
                        }

                    </Col>
                </Row>
            </container>
        </div>
    );
};

export default Course;