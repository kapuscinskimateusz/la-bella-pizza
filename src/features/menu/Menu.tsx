import { useLoaderData, useSearchParams } from 'react-router'

import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'
import type {
    CategoryFilter as CategoryFilterType,
    MenuItem as MenuItemType,
} from '../../types/menu'
import CategoryFilter from './CategoryFilter'

function Menu() {
    const menu = useLoaderData<MenuItemType[]>()
    const [searchParams] = useSearchParams()

    const filterValue = (searchParams.get('category') ||
        'all') as CategoryFilterType

    const filteredMenu = filterMenu(menu, filterValue)

    return (
        <>
            <CategoryFilter />

            <ul className="divide-y divide-stone-700">
                {filteredMenu.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </>
    )
}

export async function loader() {
    const menu = await getMenu()
    return menu
}

export default Menu

function filterMenu(menu: MenuItemType[], filter: CategoryFilterType) {
    if (filter === 'all') return menu
    return menu.filter((item) => item.category === filter)
}
