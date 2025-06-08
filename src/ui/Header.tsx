import { Link } from 'react-router'

import Logo from './Logo'
import Navigation from './Navigation'
import Username from '@/features/user/Username'

function Header() {
    return (
        <header className="relative flex h-12 items-center justify-between border-b border-red-700 bg-red-600 px-4 sm:px-6">
            <Link to="/">
                <Logo />
            </Link>

            <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <Navigation />
            </div>

            <Username className="hidden uppercase sm:block" />
        </header>
    )
}

export default Header
