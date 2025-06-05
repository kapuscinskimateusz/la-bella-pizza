import { useSearchParams } from 'react-router'

import type { Option } from '../types/ui'
import Select from './Select'

interface SortByProps {
    options: Option<string>[]
}

function SortBy({ options }: SortByProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || ''

    function handleChange(value: string) {
        searchParams.set('sortBy', value)
        setSearchParams(searchParams)
    }

    return (
        <Select
            options={options}
            value={sortBy}
            placeholder="Select sorting"
            onChange={handleChange}
        />
    )
}

export default SortBy
