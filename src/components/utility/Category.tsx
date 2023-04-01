import React from 'react';

const Category = ({children}: any) => {
    return (
        <span className='category-name travel'>
            {children}
        </span>
    );
};

export default Category;