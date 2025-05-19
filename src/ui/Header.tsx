import { Link } from 'react-router'
import { useSelector } from 'react-redux'

import AppNav from './AppNav'
import { getUsername } from '../features/user/userSlice'

function Header() {
    const username = useSelector(getUsername)

    return (
        <header className="relative flex items-center justify-between border-b border-stone-900 bg-red-600 px-4 py-3 uppercase sm:px-6">
            <Link to="/" className="tracking-widest">
                La Bella Pizza
            </Link>

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <AppNav />
            </span>

            {username !== '' && <p>Hello, {username}</p>}
        </header>
    )
}

export default Header
