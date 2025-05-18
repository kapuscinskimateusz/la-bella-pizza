import { createBrowserRouter, RouterProvider } from 'react-router'

import AppLayout from './ui/AppLayout'
import ErrorPage from './ui/ErrorPage'

import Home from './ui/Home'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import About from './ui/About'
import Cart from './features/cart/Cart'

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
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
