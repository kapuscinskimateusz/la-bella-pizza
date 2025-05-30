import type { MenuItem as MenuItemType } from '../../types/menu'
import { isPizza } from '../../utils/helpers'
import Ingredients from './Ingredients'
import MenuItemDetails from './MenuItemDetails'
import MenuItemPrice from './MenuItemPrice'

interface MenuItemProps {
    item: MenuItemType
}

function MenuItem({ item }: MenuItemProps) {
    const { image, name, soldOut } = item

    const tags = isPizza(item) ? item.tags : []

    return (
        <li className="flex gap-4 py-2">
            <img
                src={image}
                alt={name}
                className={`aspect-square h-24 object-cover ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />

            <div className="flex flex-grow flex-col pt-0.5">
                <p className="font-medium">
                    {name}{' '}
                    {tags.includes('vegetarian') && (
                        <span title="Contains no meat">🌿</span>
                    )}{' '}
                    {tags.includes('spicy') && <span title="Spicy">🔥</span>}
                </p>

                <Ingredients item={item} />

                <div className="mt-auto flex items-center justify-between">
                    <MenuItemPrice item={item} />
                    <MenuItemDetails item={item} />
                </div>
            </div>
        </li>
    )
}

export default MenuItem
