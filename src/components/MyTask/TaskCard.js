import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ todoData, handleCompleted, handleDelete }) => {
    console.log(todoData)
    const { todo, img, message, _id, status } = todoData
    return (


        <div className="w-full md:max-w-md">
            <Card >
                <img className='h-52' src={img} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {message}
                </p>
                <p className="font-semibold text-gray-700 dark:text-gray-400">
                    Comment: Task {status}
                </p>
                <div className="mt-4 flex space-x-3 lg:mt-6 mx-auto">
                    <Link to={`/my-task/update/${_id}`}

                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Update
                    </Link>
                    <button onClick={() => handleDelete(_id)}

                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        Delete
                    </button>
                    <button onClick={() => handleCompleted(_id)}

                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Completed
                    </button>
                </div>
            </Card>
        </div>


    );
};

export default TaskCard;