import type { MenuItem } from '../../types/menu'
import { formatCurrency, isPizza } from '../../utils/helpers'

interface MenuItemPriceProps {
    item: MenuItem
}

function MenuItemPrice({ item }: MenuItemPriceProps) {
    const { soldOut } = item

    if (soldOut)
        return (
            <p className="text-sm font-medium uppercase text-stone-400">
                Sold out
            </p>
        )

    return (
        <p className="text-sm capitalize">
            {isPizza(item)
                ? `from ${formatCurrency(item.sizes.small)}`
                : formatCurrency(item.price)}
        </p>
    )
}

export default MenuItemPrice
