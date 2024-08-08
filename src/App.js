import React from 'react';
import Sidebar from './Components/sidebar';
import Navbar from './Components/Navbar';
import About from './Components/about';
import Resume from './Components/resume'
import Portfolio from './Components/portfolio'
import Contact from './Components/contact'
import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar /><About /></>
    },
    {
      path : "/resume",
      element : <><Navbar /><Resume /></>
    },
    {
      path : "/portfolio",
      element : <><Navbar /><Portfolio /></>
    },
    {
      path : "contact",
      element : <><Navbar /><Contact /></>
    },
  ])
  return (
    <div className="flex max-w-7xl">
      <Sidebar />
      <div className="flex flex-col w-full">
        
        <RouterProvider router = {router} />
      </div>
    </div>
  );
}

export default App;
