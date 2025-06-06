import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

import type { Option } from '../types/ui'
import { useOutsideClick } from '../hooks/useOutsideClick'

interface SelectProps {
    options: Option<string>[]
    value: string
    placeholder?: string
    onChange: (newVal: string) => void
}

const optionsClasses = {
    base: 'absolute z-50 mt-1 overflow-hidden rounded-lg border border-stone-600 bg-stone-700 py-1',
}

const optionClasses = {
    base: 'whitespace-nowrap px-2.5 py-1.5 text-sm transition-colors duration-300',
    active: 'bg-red-700',
    inactive: 'hover:bg-red-700/50',
}

function Select({
    options,
    value,
    placeholder = '',
    onChange,
    ...props
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(0)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    const selectRef = useOutsideClick(close)
    const hiddenRef = useRef<HTMLDivElement | null>(null)

    const currentOption = options.find((option) => option.value === value)

    useEffect(() => {
        if (hiddenRef.current) {
            setWidth(Math.ceil(hiddenRef.current.getBoundingClientRect().width))
        }
    }, [])

    function handleClick(value: string) {
        onChange(value)
        close()
    }

    return (
        <div ref={selectRef} className="relative cursor-default" {...props}>
            <div
                tabIndex={0}
                onClick={open}
                className="flex h-8 items-center rounded-lg border border-stone-600 bg-stone-700 px-2.5 text-sm outline-none transition-all duration-300 focus:border-red-600 focus:ring-2 focus:ring-red-600 md:h-9"
            >
                <div style={{ width }}>
                    {currentOption?.label ?? placeholder}
                </div>

                <ChevronDown size={20} className={isOpen ? 'rotate-180' : ''} />
            </div>

            {isOpen && (
                <div className={`${optionsClasses.base} w-full`}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleClick(option.value)}
                            className={[
                                optionClasses.base,
                                option.value === currentOption?.value
                                    ? optionClasses.active
                                    : optionClasses.inactive,
                            ].join(' ')}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}

            {/* HIDDEN - It's only to calculate the select width */}
            <div ref={hiddenRef} className={`${optionsClasses.base} invisible`}>
                <div
                    className={`${optionClasses.base} ${optionClasses.active}`}
                >
                    {getWidestLabel(options)}
                </div>
            </div>
        </div>
    )
}

export default Select

function getWidestLabel(options: Option<string>[]) {
    if (options.length === 0) return ''

    return options.reduce((widest, option) =>
        widest.label.length > option.label.length ? widest : option
    ).label
}
