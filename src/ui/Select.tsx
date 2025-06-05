import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import type { Option } from '../types/ui'
import { useOutsideClick } from '../hooks/useOutsideClick'

interface SelectProps {
    options: Option<string>[]
    value: string
    placeholder?: string
    onChange: (newVal: string) => void
}

function Select({
    options,
    value,
    placeholder = '',
    onChange,
    ...props
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    const ref = useOutsideClick(close)

    const currentOption = options.find((option) => option.value === value)

    function handleClick(value: string) {
        onChange(value)
        close()
    }

    return (
        <div ref={ref} className="relative w-full max-w-80" {...props}>
            <div
                tabIndex={0}
                onClick={open}
                className="flex h-8 items-center justify-between rounded-lg border border-stone-600 bg-stone-700 px-2.5 text-sm outline-none transition-all duration-300 focus:border-red-600 focus:ring-2 focus:ring-red-600 md:h-9"
            >
                <span className="truncate">
                    {currentOption?.label ?? placeholder}
                </span>

                <ChevronDown
                    size={20}
                    className={`flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-stone-600 bg-stone-700 py-1">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleClick(option.value)}
                            className={`cursor-default whitespace-nowrap px-2.5 py-1.5 text-sm transition-colors duration-300 ${option.value === currentOption?.value ? 'bg-red-700' : 'hover:bg-red-700/50'}`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Select
