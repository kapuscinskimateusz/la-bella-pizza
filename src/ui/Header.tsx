import { Link } from 'react-router'

function Header() {
    return (
        <header className="border-b border-stone-900 bg-red-600 px-4 py-3 uppercase sm:px-6">
            <Link to="/" className="tracking-widest">
                La Bella Pizza
            </Link>
        </header>
    )
}

export default Header
