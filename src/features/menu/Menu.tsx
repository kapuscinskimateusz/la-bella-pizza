import { useLoaderData } from 'react-router'

import {
    getMenu,
    type MenuItem as MenuItemType,
} from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
    const menu = useLoaderData<MenuItemType[]>()

    return (
        <ul className="divide-y divide-stone-700 py-1">
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
