import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './ui/AppLayout'
import ErrorPage from './ui/ErrorPage'

import Home from './ui/Home'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
