import type { Option } from '../types/ui'

interface RadioGroupProps {
    options: Option<string>[]
    name: string
    selectedValue: string
    onChange: (newValue: string) => void
}

function RadioGroup({
    options,
    name,
    selectedValue,
    onChange,
}: RadioGroupProps) {
    return (
        <div>
            {options.map(({ value, label }) => (
                <div key={value}>
                    <input
                        type="radio"
                        name={name}
                        id={value}
                        value={selectedValue}
                        checked={selectedValue === value}
                        onChange={() => onChange(value)}
                    />
                    <label htmlFor={value}>{label}</label>
                </div>
            ))}
        </div>
    )
}

export default RadioGroup
