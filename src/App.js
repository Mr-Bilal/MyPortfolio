import React from 'react';
import Sidebar from './Components/sidebar';
import Navbar from './Components/Navbar';
import About from './Components/about';
import Resume from './Components/resume';
import Portfolio from './Components/portfolio';
import Contact from './Components/contact';
import NotFound from './Components/NotFound'; // A custom 404 component
import ErrorPage from './Components/ErrorPage'; // A custom error boundary component
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/MyPortfolio",
      element: <><Navbar /><About /></>,
      errorElement: <ErrorPage />, // Handles errors in this route
    },
    {
      path: "/",
      element: <><Navbar /><About /></>,
      errorElement: <ErrorPage />, // Handles errors in this route
    },
    {
      path: "/resume",
      element: <><Navbar /><Resume /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/portfolio",
      element: <><Navbar /><Portfolio /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>,
      errorElement: <ErrorPage />,
    },
    {
      path: "*", // Fallback for any undefined paths
      element: <><Navbar /><NotFound /></>,
    },
  ]);

  return (
    <div className="lg:max-2xl:flex lg:max-2xl:max-w-7xl">
      <Sidebar />
      <div className="flex flex-col w-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
