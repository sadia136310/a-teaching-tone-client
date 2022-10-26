import React from 'react';
import { Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';



const RightSide = ({course}) => {
    const {title,image,description} = course;



    return (
        <div className='mb-4'>
           <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><h3>{title}</h3></Card.Title>
        <Card.Text>
          {description.slice(0,200) + '.......'}<Link to={`/course/${course.id}`}><small>see more</small></Link>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default RightSide;