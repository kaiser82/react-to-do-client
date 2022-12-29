import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import MyTask from "../components/MyTask/MyTask";
import UpdateForm from "../components/MyTask/UpdateForm";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-task',
                element: <PrivateRoute><AddTask /></PrivateRoute>
            },
            {
                path: '/my-task',
                element: <PrivateRoute><MyTask /></PrivateRoute>
            },
            {
                path: '/my-task/update/:id',
                element: <PrivateRoute><UpdateForm /></PrivateRoute>
            },
            {
                path: '/completed-task',
                element: <PrivateRoute><CompletedTask /></PrivateRoute>
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