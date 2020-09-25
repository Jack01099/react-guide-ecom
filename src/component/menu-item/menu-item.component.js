import React from 'react';

import './menu-item.style.scss';
const menuItem = ( { title, id, imageUrl, size } ) => (
    <div className={`${size} menu-item`}>
        <div className='background-images'    
                style={{
                    backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase() }</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default menuItem;