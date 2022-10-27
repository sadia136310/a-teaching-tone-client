import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <div className='d-flex justify-center align-center'>
               <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loader;