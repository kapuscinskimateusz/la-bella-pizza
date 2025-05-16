import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'

interface ButtonProps {
    children: ReactNode
    to?: string
    onClick?: () => void
}

function Button({ children, to, onClick = () => {} }: ButtonProps) {
    const navigate = useNavigate()

    function handleClick() {
        if (to !== undefined) {
            navigate(to)
            return
        }

        onClick()
    }

    return (
        <button
            className="cursor-pointer rounded-full bg-red-600 px-4 py-3 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-stone-800 md:px-6 md:py-4"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button
