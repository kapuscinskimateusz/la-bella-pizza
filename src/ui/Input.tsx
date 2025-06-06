import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function Input({ className = '', ...otherProps }: InputProps) {
    return (
        <input
            className={[
                'rounded-full border border-stone-600 bg-stone-700 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-red-600 focus:ring-2 focus:ring-red-600 md:px-6 md:py-3',
                className,
            ].join(' ')}
            {...otherProps}
        />
    )
}

export default Input
