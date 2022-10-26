import React from 'react';
import { useLoaderData } from 'react-router-dom';


const RightSide = ({ course }) => {
    const {name} = useLoaderData();
   


    return (
        <div>
            {
name
            }
        </div>
    );
};

export default RightSide;