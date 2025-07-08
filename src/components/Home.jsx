import React, { useEffect, useState } from 'react';
import CategoryDetails from './CategoryDetails';

const Home = () => {

    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h4 className='text-2xl font-medium text-center pt-10 pb-10'>All Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    category.map(items => <CategoryDetails key={items.service_id} items={items}></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Home;