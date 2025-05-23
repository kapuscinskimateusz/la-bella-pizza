import type { MenuItem as MenuItemType } from '../../types'
import { formatCurrency } from '../../utils/helpers'
import AddToCart from '../cart/AddToCart'

interface MenuItemProps {
    item: MenuItemType
}

function MenuItem({ item }: MenuItemProps) {
    const { name, soldOut, ingredients, sizes } = item

    return (
        <li className="flex gap-4 py-2">
            <img
                src="/img/margherita.jpg"
                alt={name}
                className={`aspect-square h-24 object-cover ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex flex-grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-400">
                    {ingredients.join(', ')}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">
                            from {formatCurrency(sizes.small)}
                        </p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-400">
                            Sold out
                        </p>
                    )}

                    {!soldOut && <AddToCart item={item} />}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
