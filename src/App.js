import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';
import { router } from './routes/Router';

function App() {
  const { darkTheme } = useContext(AuthContext)
  return (
    <div className={darkTheme ? "dark" : ""}>

      <div className='container mx-auto  dark:bg-gray-700 text-white'>
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
