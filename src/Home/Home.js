import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import img1 from '../images/jpg.webp';
import img2 from '../images/1322324.webp';


const Home = () => {
    return (
        <div className='home-slider mt-4'>
             <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Teaching Tone</h3>
          <h1>The Best Learning Institution</h1>
          <p>Website offering lesson plans, professional development, and instructional strategies. Our courses offers literally unique and compelling lesson plans, instructional strategies, and modules on developing leadership, student engagement, and  learning. This is an essential online educational source. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Welcome To Teaching Tone</h3>
          <h1>The Best Learning Institution</h1>
          <p>Website offering lesson plans, professional development, and instructional strategies. Our courses offers literally unique and compelling lesson plans, instructional strategies, and modules on developing leadership, student engagement, and  learning. This is an essential online educational source. </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
        </div>
    );
};

export default Home;