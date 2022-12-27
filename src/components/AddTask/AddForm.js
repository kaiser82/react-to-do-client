import React from 'react';

const AddForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const todo = event.target.todo.value;
        const image = event.target.fileInput.files[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_KEY}`
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='max-w-lg mx-auto px-2'>

                <div className="mb-6">
                    <label htmlFor="todo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add ToDo</label>
                    <input type="text" name='todo' id="todo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="todo text..." required />
                </div>
                <div className="mb-6">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                    <input name='fileInput' className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept='image/*' required />

                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddForm;