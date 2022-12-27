import React from 'react';
import Form from './Form';

const Home = () => {
    return (
        <div className='h-screen'>
            <h2 className='text-2xl font-bold uppercase text-center'>ToDo Home</h2>
            <h4>Enter Your ToDo Here</h4>
            <Form />
        </div>
    );
};

export default Home;