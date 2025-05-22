import type { CartItem as CartItemType } from '../../types'

interface CartItemProps {
    item: CartItemType
}

function CartItem({ item }: CartItemProps) {
    const { name, size, quantity } = item

    return (
        <li>
            <p>
                {quantity}&times; <span className="font-medium">{name}</span>{' '}
                <span className="capitalize">({size})</span>
            </p>
        </li>
    )
}

export default CartItem
