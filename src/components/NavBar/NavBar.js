import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../assets/todo-logo.png'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(toast.success('user logged out'))
    }
    return (

        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt=" Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    ToDo
                </span>
            </Navbar.Brand>
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
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/add-task">
                    Add Task
                </Navbar.Link>
                <Navbar.Link href="/my-task">
                    My Task
                </Navbar.Link>
                <Navbar.Link href="/completed-task">
                    Completed Task
                </Navbar.Link>
                {
                    user?.email ?
                        <Button color='light' onClick={handleSignOut}>
                            Log Out
                        </Button>
                        :
                        <Navbar.Link href="/login">
                            Log In
                        </Navbar.Link>
                }
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavBar;