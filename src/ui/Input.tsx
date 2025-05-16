import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

function Input({ className = '', ...otherProps }: InputProps) {
    const inputClasses = [
        'rounded-full border border-stone-950 bg-stone-800 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-500 focus:ring focus:ring-red-700 md:px-6 md:py-3',
        className,
    ].join(' ')

    return <input className={inputClasses} {...otherProps} />
}

export default Input
