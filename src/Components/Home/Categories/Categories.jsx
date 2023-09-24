import React, { useEffect, useState } from 'react';
import Category from './category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[]);
    console.log();
    return (
        <div className='max-w-4xl mx-auto space-y-8 py-12'>
            <h1 className='text-6xl text-center'>Category List</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;