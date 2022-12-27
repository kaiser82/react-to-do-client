import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import MyTask from "../components/MyTask/MyTask";
import SignUp from "../components/SignUp/SignUp";
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
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <LogIn />
            },
        ]
    }
])