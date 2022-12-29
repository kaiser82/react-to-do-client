import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/todo-logo.png'

const Footer = () => {
    return (

        <footer className="mt-10 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex items-center justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} className="mr-3 h-8" alt=" Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo</span>
                </a>
                <ul className="flex flex-wrap items-center space-x-4 mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://kaiser-portfolio.netlify.app/" className="hover:underline">Kaiser™</a>. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;