import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../assets/todo-logo.png'

const NavBar = () => {
    const { user, logOut, darkTheme, setDarkTheme } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(toast.success('user logged out'))
    }
    return (

        <div className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt=" Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        ToDo
                    </span>
                </Navbar.Brand>
                <div>
                    <button onClick={() => setDarkTheme(!darkTheme)} id="theme-toggle" type="button" className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        {
                            darkTheme ?
                                <svg id="theme-toggle-light-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                :
                                <svg id="theme-toggle-dark-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        }
                    </button>
                </div>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {
                                    user?.displayName
                                }
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {
                                    user?.email
                                }
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            {
                                user?.email ?
                                    <Link onClick={handleSignOut}>
                                        Log Out
                                    </Link>
                                    :
                                    <Link to="/login">
                                        Log In
                                    </Link>
                            }

                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to="/"
                    // active={true}
                    >
                        Home
                    </Link>
                    <Link to="/add-task">
                        Add Task
                    </Link>
                    <Link to="/my-task">
                        My Task
                    </Link>
                    <Link to="/completed-task">
                        Completed Task
                    </Link>
                    {
                        user?.email ?
                            <Link onClick={handleSignOut}>
                                Log Out
                            </Link>
                            :
                            <Link to="/login">
                                Log In
                            </Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavBar;