import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TaskCard from './TaskCard';


const MyTask = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [todos, setTodos] = useState([]);
    console.log(todos)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/todos?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setTodos(data)
                setLoading(false)
            })
    }, [user?.email, setLoading])

    const handleCompleted = (id) => {
        fetch(`http://localhost:5000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Completed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('ToDo Completed')
                    navigate('/completed-task')
                }
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure! Your want to delete this task?');
        if (proceed) {
            fetch(`http://localhost:5000/todos/${id}`, {
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
        <div >
            <h2 className='text-2xl font-bold text-center uppercase'>My Task</h2>
            <div className=" grid  rounded-lg shadow-md dark:border-gray-700 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-5 ">

                {
                    todos.map(todo =>
                        <TaskCard key={todo._id} todoData={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} />)
                }
            </div>

        </div>
    );
};

export default MyTask;