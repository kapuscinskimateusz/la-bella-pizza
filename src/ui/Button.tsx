import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'

import type { ButtonSize as Size, ButtonVariant as Variant } from '../types/ui'

interface ButtonProps {
    children: ReactNode
    variant?: Variant
    size?: Size
    round?: boolean
    to?: string
    onClick?: () => void
}

const variants = {
    primary: 'bg-red-600 hover:bg-red-700 focus:bg-red-700 focus:ring-red-700',
    secondary:
        'border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200',
}

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    round,
    to,
    onClick = () => {},
}: ButtonProps) {
    const navigate = useNavigate()

    const sizes = {
        small: `text-xs ${round ? 'aspect-square h-8 md:h-9' : 'h-8 px-4 md:h-9 md:px-5'}`,
        medium: `text-sm ${round ? 'aspect-square h-11 md:h-[52px]' : 'h-11 px-4 text-sm md:h-[52px] md:px-6'}`,
    }

    const classes = [
        'inline-flex cursor-pointer items-center justify-center rounded-full font-semibold uppercase tracking-wide outline-none transition-colors duration-300 focus:ring focus:ring-offset-2 focus:ring-offset-stone-800',
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
