import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './ui/AppLayout'
import ErrorPage from './ui/ErrorPage'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <div>Hello world!</div>,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
