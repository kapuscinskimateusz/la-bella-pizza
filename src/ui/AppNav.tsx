import { NavLink } from 'react-router'
import CartRouteName from '../features/cart/CartRouteName'

const routes = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/about', name: 'About' },
    { path: '/cart', name: <CartRouteName /> },
]

function AppNav() {
    const activeClasses =
        'relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-sm before:bg-red-700'

    return (
        <nav>
            <ul className="flex items-center gap-x-6">
                {routes.map((route) => (
                    <li key={route.path}>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                isActive ? activeClasses : ''
                            }
                        >
                            <span className="relative z-10">{route.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default AppNav
