import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import CloseButton from './CloseButton'
import Username from '@/features/user/Username'

const routes = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/about', name: 'About' },
]

function Navigation() {
    return (
        <nav>
            <span className="sm:hidden">
                <Mobile />
            </span>

            <span className="hidden sm:block">
                <Desktop />
            </span>
        </nav>
    )
}

function Mobile() {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => setIsOpen(false)
    const open = () => setIsOpen(true)

    const ref = useOutsideClick(close)

    return (
        <>
            <span role="button" onClick={open}>
                <Menu />
            </span>

            {isOpen && (
                <div className="overlay">
                    <div
                        ref={ref}
                        className="animate-slide fixed inset-y-0 right-0 flex w-4/5 flex-col border-l border-stone-700 bg-stone-800"
                    >
                        <header className="flex h-12 items-center justify-end px-4 sm:px-6">
                            <CloseButton onClick={close} />
                        </header>

                        <div className="flex flex-grow flex-col px-4 py-3 uppercase sm:px-6">
                            <ul>
                                {routes.map(({ path, name }) => (
                                    <li key={path} onClick={close}>
                                        <NavLink
                                            to={path}
                                            className={({ isActive }) =>
                                                `block rounded-lg py-2 ${isActive ? 'bg-red-600 px-4 sm:px-6' : ''}`
                                            }
                                        >
                                            <span>{name}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <Username className="mt-auto" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function Desktop() {
    return (
        <ul className="flex items-center gap-x-6">
            {routes.map(({ path, name }) => (
                <li key={path}>
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            isActive
                                ? 'relative before:absolute before:-inset-1 before:-skew-y-3 before:rounded-sm before:bg-red-700'
                                : ''
                        }
                    >
                        <span className="relative z-10 uppercase">{name}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Navigation
