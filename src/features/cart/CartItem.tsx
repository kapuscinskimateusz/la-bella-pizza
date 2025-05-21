import type { CartItem as CartItemType } from '../../types'

interface CartItemProps {
    item: CartItemType
}

function CartItem({ item }: CartItemProps) {
    const { name, quantity } = item

    return (
        <li>
            <p>
                {quantity}&times; <span className="font-medium">{name}</span>
            </p>
        </li>
    )
}

export default CartItem
