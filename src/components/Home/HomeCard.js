import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/to-do.jpg'

const HomeCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold p-10'>Organize your work and enhance productivity with these creative to-do app</h1>
                <div className='text-center'>
                    <Link to='add-task' type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add ToDo</Link>
                </div>
            </div>
            <div className='px-2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default HomeCard;