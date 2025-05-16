import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...otherProps }: InputProps) {
    return (
        <input
            className="rounded-full border border-stone-950 bg-stone-800 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-500 focus:ring focus:ring-red-700"
            {...otherProps}
        />
    )
}

export default Input
