import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CompletedTaskCard from './CompletedTaskCard';

const CompletedTask = () => {
    const [todos, setTodos] = useState([])
    const { user } = useContext(AuthContext)

    const completedTodos = todos.filter(todo => (todo.status === 'Completed'))
    console.log(completedTodos)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://to-do-app-server.vercel.app/todos?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [user?.email,])

    const handleNotCompleted = (id) => {
        fetch(`https://to-do-app-server.vercel.app/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Not Completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('ToDo Set to Not Completed')
                    navigate('/my-task')
                }
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure! Your want to delete this task?');
        if (proceed) {
            fetch(`https://to-do-app-server.vercel.app/todos/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('ToDo deleted');
                        const remaining = todos.filter(todo => todo._id !== id);
                        setTodos(remaining)
                    }
                    else {
                        toast.error(data.error);
                    }
                })
                .catch(e => console.log(e.message))
        }
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-center uppercase'>Completed task</h2>
            <div className='grid grid-cols-1  rounded-lg shadow-md dark:border-gray-700 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto'>
                {
                    completedTodos.map(todo =>
                        <CompletedTaskCard key={todo._id} todoData={todo} handleDelete={handleDelete} handleNotCompleted={handleNotCompleted} />)
                }
            </div>
        </div>
    );
};

export default CompletedTask;