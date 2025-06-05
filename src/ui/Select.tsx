import type { ChangeEvent } from 'react'

import type { Option } from '../types/ui'

interface SelectProps {
    options: Option<string>[]
    value: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

function Select({ options, value, onChange, ...props }: SelectProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="h-8 rounded-lg border border-stone-600 bg-stone-700 px-2.5 text-sm outline-none transition-all duration-300 focus:border-red-600 focus:ring-2 focus:ring-red-600 md:h-9"
            {...props}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select
