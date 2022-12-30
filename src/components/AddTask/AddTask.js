import React from 'react';
import AddForm from './AddForm';

const AddTask = () => {
    return (
        <div className='py-10'>
            <h2 className='text-2xl font-bold text-center uppercase pb-5'>Add your task</h2>
            <AddForm />
        </div>
    );
};

export default AddTask;