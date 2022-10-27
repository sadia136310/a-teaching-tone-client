import React from 'react';
import './ToggoleButton.css';
import cx from "classnames"

const ToggoleButton = ({ rounded = false }) => {

    const sliderCX = cx('slider', {
        rounded: rounded
        
    })
  
    return (
        <label className='switch'>
         
            <input type="checkbox" />
            <span className={sliderCX}/>
        </label>
    );
};

export default ToggoleButton;