import { useSearchParams } from 'react-router'

import type { Option } from '../types/ui'
import ButtonGroup from './ButtonGroup'
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
        <ButtonGroup>
            {options.map(({ label, value }) => (
                <Button key={value} onClick={() => handleClick(value)}>
                    {label}
                </Button>
            ))}
        </ButtonGroup>
    )
}

export default Filter
