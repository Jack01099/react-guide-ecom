import React from 'react';

import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item';

const collectionPreview = ({title, items}) => {
return (
    <div className='collection-preview'>
        <h1 className='title'> { title.toUpperCase() }
            <div className='preview'>
                {items
                    .filter((items, idx ) => idx < 4)
                    .map( ({id, ...otherItemProps}) => ( 
                        <CollectionItem key={id} {...otherItemProps} /> 
                ))}
            </div>
        </h1>
    </div>
);
}

export default collectionPreview;