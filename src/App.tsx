import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './ui/AppLayout'
import ErrorPage from './ui/ErrorPage'

import Home from './ui/Home'
import Menu, { loader as menuLoader } from './features/menu/Menu'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
                loader: menuLoader,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
