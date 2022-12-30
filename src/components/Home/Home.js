import React from 'react';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div className='py-10 h-screen text-gray-800 bg-white dark:bg-gray-700 dark:text-white'>
            <h2 className='text-2xl font-bold uppercase text-center'>ToDo Home</h2>
            <HomeCard />

        </div>
    );
};

export default Home;