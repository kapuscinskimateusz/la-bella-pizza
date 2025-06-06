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
        <div className="space-y-4">
            {options.map(({ value, label }) => (
                <label
                    key={value}
                    className="flex cursor-pointer items-center gap-x-2.5"
                >
                    <input
                        type="radio"
                        name={name}
                        id={value}
                        checked={selectedValue === value}
                        onChange={() => onChange(value)}
                        className="peer sr-only"
                    />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-stone-500 transition-all duration-300 before:h-3 before:w-3 before:rounded-full before:bg-red-600 before:opacity-0 before:transition-all before:duration-300 peer-checked:border-red-600 peer-checked:before:opacity-100"></div>

                    <span className="text-sm font-medium">{label}</span>
                </label>
            ))}
        </div>
    )
}

export default RadioGroup
