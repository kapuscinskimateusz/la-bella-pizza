import type { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
}

function Button({ children }: ButtonProps) {
    return (
        <button className="cursor-pointer rounded-full bg-red-600 px-4 py-3 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-stone-800 md:px-6 md:py-4">
            {children}
        </button>
    )
}

export default Button
