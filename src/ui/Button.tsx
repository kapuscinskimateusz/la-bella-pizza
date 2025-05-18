import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium'
    to?: string
    onClick?: () => void
}

const variants = {
    primary: 'bg-red-600 hover:bg-red-700 focus:bg-red-700 focus:ring-red-700',
    secondary: '',
}

const sizes = {
    small: 'px-4 py-2 text-xs md:px-5 md:py-2.5',
    medium: 'px-4 py-3 text-sm md:px-6 md:py-4',
}

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    to,
    onClick = () => {},
}: ButtonProps) {
    const navigate = useNavigate()

    const classes = [
        'cursor-pointer rounded-full font-semibold uppercase tracking-wide outline-none transition-colors duration-300 focus:ring focus:ring-offset-2 focus:ring-offset-stone-800',
        variants[variant],
        sizes[size],
    ].join(' ')

    function handleClick() {
        if (to !== undefined) {
            navigate(to)
            return
        }

        onClick()
    }

    return (
        <button className={classes} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
