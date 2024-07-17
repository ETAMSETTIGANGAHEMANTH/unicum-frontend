import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './Rootlayout';
import Staticpage1 from './components/staticpage1/Staticpage1';
import Staticpage2 from './components/staticpage2/Staticpage2';
import Staticpage3 from './components/staticpage3/Staticpage3';
import Admin from './components/admin/Admin';
import List from './components/list/List'
import { AuthProvider } from './components/context/AuthProvider';
import PrivateRoute from './components/context/PrivateRoute';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          path: '/',
          element: <Staticpage1 />,
        },
        {
          path: '/home',
          element: <Staticpage1 />,
        },
        {
          path: '/service',
          element: <Staticpage2 />,
        },
        {
          path: '/contact',
          element: <Staticpage3 />,
        },
        {
          path:'/admin',
          element:<Admin/>
        },
        {
          path:'/list',
          element:(
            <PrivateRoute>
              <List/>
            </PrivateRoute>
          )
        }
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
