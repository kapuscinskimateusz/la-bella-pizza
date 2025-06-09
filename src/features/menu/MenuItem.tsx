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
        <li className="flex items-center gap-4 py-2 sm:items-stretch">
            <img
                src={image}
                alt={name}
                className={`aspect-square h-20 object-cover sm:h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />

            <div className="flex flex-grow flex-col sm:pt-0.5">
                <p className="font-medium">
                    {name}{' '}
                    {tags.includes('vegetarian') && (
                        <span title="Contains no meat">🌿</span>
                    )}{' '}
                    {tags.includes('spicy') && <span title="Spicy">🔥</span>}
                </p>

                <Ingredients item={item} />

                <div className="mt-3 flex items-center justify-between sm:mt-auto">
                    <MenuItemPrice item={item} />

                    {!soldOut && <MenuItemDetails item={item} />}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
