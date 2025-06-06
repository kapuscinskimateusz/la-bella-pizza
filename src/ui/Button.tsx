import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'

import type {
    ButtonGroupPosition as GroupPosition,
    ButtonSize as Size,
    ButtonVariant as Variant,
} from '../types/ui'

export interface ButtonProps {
    children: ReactNode
    variant?: Variant
    size?: Size
    round?: boolean
    to?: string
    groupPosition?: GroupPosition
    wide?: boolean
    onClick?: () => void
}

const baseClasses =
    'inline-flex cursor-pointer items-center justify-center font-semibold uppercase tracking-wide outline-none transition-colors duration-300 focus:z-10 focus:ring focus:ring-offset-2 focus:ring-offset-stone-800'

const variantClasses: Record<Variant, string> = {
    primary: 'bg-red-600 hover:bg-red-700 focus:bg-red-700 focus:ring-red-700',
    secondary:
        'border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200',
}

const sizeClasses: Record<Size, { base: string; round: string }> = {
    small: {
        base: 'h-8 px-4 text-xs md:h-9 md:px-5',
        round: 'aspect-square h-8 text-xs md:h-9',
    },
    medium: {
        base: 'h-11 px-4 text-sm md:h-[52px] md:px-6',
        round: 'aspect-square h-11 text-sm md:h-[52px]',
    },
}

const groupPositionClasses: Record<GroupPosition, string> = {
    only: 'rounded-full',
    first: 'rounded-l-full rounded-r-none',
    middle: 'rounded-none',
    last: 'rounded-l-none rounded-r-full',
}

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    round = false,
    to,
    groupPosition = 'only',
    wide,
    onClick,
}: ButtonProps) {
    const navigate = useNavigate()

    const classes = [
        baseClasses,
        variantClasses[variant],
        round ? sizeClasses[size].round : sizeClasses[size].base,
        groupPositionClasses[groupPosition],
        wide ? 'w-full' : '',
    ].join(' ')

    function handleClick() {
        if (to !== undefined) {
            navigate(to)
            return
        }

        onClick?.()
    }

    return (
        <button className={classes} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
