import { useSearchParams } from 'react-router'

import type { Option } from '../types/ui'

interface FilterProps {
    filterField: string
    options: Option<string>[]
}

function Filter({ filterField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options[0]?.value

    function handleClick(value: string) {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }

    return (
        <div>
            {options.map(({ label, value }) => (
                <button
                    key={value}
                    onClick={() => handleClick(value)}
                    className={value === currentFilter ? 'text-red-700' : ''}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}

export default Filter
