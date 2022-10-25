import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='error-container text-center'>
            <h1>404!</h1>
            <h1>Sorry, we couldn't find this page</h1>
            <br />
            <br />
             <Link to='/'className="error">
            Back to homepage
          </Link>
        </div>
        </div>
    );
};

export default ErrorPage;