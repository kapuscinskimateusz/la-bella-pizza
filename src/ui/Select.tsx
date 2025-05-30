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
            className="bg-stone-200 text-sm text-stone-800"
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
