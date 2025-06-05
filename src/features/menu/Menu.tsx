import { useLoaderData, useSearchParams } from 'react-router'

import type {
    Category,
    MenuItem as MenuItemType,
    SortDirection,
    SortField,
    SortValue,
} from '../../types/menu'
import { getMenu } from '../../services/apiRestaurant'
import { isPizza } from '../../utils/helpers'
import MenuItem from './MenuItem'
import MenuListOperations from './MenuListOperations'

function Menu() {
    const menu = useLoaderData<MenuItemType[]>()
    const [searchParams] = useSearchParams()

    const filterValue: Category =
        (searchParams.get('category') as Category) || 'pizza'
    const sortValue: SortValue = (searchParams.get('sortBy') as SortValue) || ''

    const filteredMenu = menu.filter((item) => item.category === filterValue)
    const sortedMenu = sortMenu(filteredMenu, sortValue)

    return (
        <div className="pt-2">
            <MenuListOperations />

            <ul className="divide-y divide-stone-700">
                {sortedMenu.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const menu = await getMenu()
    return menu
}

export default Menu

function sortMenu(menu: MenuItemType[], sortBy: SortValue) {
    const [field, direction] = sortBy.split('-') as [SortField, SortDirection]
    const modifier = direction === 'asc' ? 1 : -1

    return [...menu].sort((a, b) => {
        switch (field) {
            case 'name':
                return a.name.localeCompare(b.name) * modifier
            case 'price':
                return (
                    (getComparablePrice(a) - getComparablePrice(b)) * modifier
                )
            default:
                return 0
        }
    })
}

function getComparablePrice(item: MenuItemType) {
    if (isPizza(item)) return item.sizes.small

    return item.price
}
