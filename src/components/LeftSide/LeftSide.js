import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://a-teaching-tone-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            {/* <h3>All Category: {categories.length} </h3> */}
            <div>
                {

                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/course/${category.id}`} className='link'><button  className='category'>{category.name}</button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;