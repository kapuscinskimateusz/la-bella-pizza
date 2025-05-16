import type { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
}

function Button({ children }: ButtonProps) {
    return (
        <button className="cursor-pointer rounded-full bg-red-600 px-4 py-3 font-semibold tracking-wide uppercase sm:px-6">
            {children}
        </button>
    )
}

export default Button
