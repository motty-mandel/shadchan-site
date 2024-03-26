import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Welcome from './pages/Welcome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Not Found</div>,
        children: [
            {
                index: true,
                element: <Welcome/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);