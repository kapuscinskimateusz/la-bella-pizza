import Filter from '../../ui/Filter'

const categories = [
    { label: 'All', value: 'all' },
    { label: 'Pizzas', value: 'pizza' },
    { label: 'Sauces', value: 'sauce' },
    { label: 'Drinks', value: 'drink' },
]

function CategoryFilter() {
    return <Filter filterField="category" options={categories} />
}

export default CategoryFilter
