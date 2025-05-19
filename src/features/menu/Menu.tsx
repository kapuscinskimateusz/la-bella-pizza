import { useLoaderData } from 'react-router'

import { getMenu } from '../../services/apiRestaurant'
import type { MenuItem as MenuItemType } from '../../types'
import MenuItem from './MenuItem'

function Menu() {
    const menu = useLoaderData<MenuItemType[]>()

    return (
        <ul className="divide-y divide-stone-700">
            {menu.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export async function loader() {
    const menu = await getMenu()
    return menu
}

export default Menu
