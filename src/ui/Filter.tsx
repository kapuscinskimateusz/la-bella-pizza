import { useSearchParams } from 'react-router'

import type { Option } from '../types/ui'
import Button from './Button'

interface FilterProps {
    filterField: string
    options: Option<string>[]
}

function Filter({ filterField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    // const currentFilter = searchParams.get(filterField) || options[0]?.value

    function handleClick(value: string) {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {options.map(({ label, value }) => (
                <Button
                    key={value}
                    variant="secondary"
                    size="small"
                    onClick={() => handleClick(value)}
                >
                    {label}
                </Button>
            ))}
        </div>
    )
}

export default Filter
