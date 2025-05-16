import { NavLink } from 'react-router'

const routes = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
]

function NavPage() {
    const activeClasses =
        'relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-700'

    return (
        <nav>
            <ul className="flex items-center gap-x-4">
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

export default NavPage
