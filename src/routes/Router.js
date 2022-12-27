import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Home from "../components/Home/Home";
import MyTask from "../components/MyTask/MyTask";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-task',
                element: <AddTask />
            },
            {
                path: '/my-task',
                element: <MyTask />
            },
            {
                path: '/completed-task',
                element: <CompletedTask />
            },
        ]
    }
])