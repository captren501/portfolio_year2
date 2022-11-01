import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
// import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, Route,} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/Layout',
    element: <Layout/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
