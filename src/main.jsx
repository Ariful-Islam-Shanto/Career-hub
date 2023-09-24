import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/Applied Jobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Home from './Components/Home/Home.jsx';
import JobDetails from './Components/Home/Features/JobDetails.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/appliedJobs',
          element: <AppliedJobs></AppliedJobs>,
          loader: () => fetch('../jobs.json')
        },
        {
          path: '/JobDetails/:id',
          element: <JobDetails></JobDetails>,
          loader: () => fetch('../jobs.json')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
