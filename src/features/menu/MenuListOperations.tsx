import type { Category, SortValue } from '../../types/menu'
import type { Option } from '../../types/ui'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'

const filterOptions: Option<Category>[] = [
    { label: 'Pizzas', value: 'pizza' },
    { label: 'Sauces', value: 'sauce' },
    { label: 'Drinks', value: 'drink' },
]

const sortByOptions: Option<SortValue>[] = [
    { label: 'Sort by price (low first)', value: 'price-asc' },
    { label: 'Sort by price (high first)', value: 'price-desc' },
    { label: 'Sort by name (A-Z)', value: 'name-asc' },
    { label: 'Sort by name (Z-A)', value: 'name-desc' },
]

function MenuListOperations() {
    return (
        <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-y-0">
            <Filter filterField="category" options={filterOptions} />

            <SortBy options={sortByOptions} />
        </div>
    )
}

export default MenuListOperations
