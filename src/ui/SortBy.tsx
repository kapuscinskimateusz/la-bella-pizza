import type { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router'

import type { Option } from '../types/ui'
import Select from './Select'

interface SortByProps {
    options: Option<string>[]
}

function SortBy({ options }: SortByProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || ''

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
    }

    return <Select options={options} value={sortBy} onChange={handleChange} />
}

export default SortBy
