import { useDispatch } from 'react-redux'

import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import UpdateItemQuantity from './UpdateItemQuantity'
import { deleteItem } from './cartSlice'
import type { CartItem as CartItemType } from '../../types/cart'

interface CartItemProps {
    item: CartItemType
}

function CartItem({ item }: CartItemProps) {
    const { id, quantity, name, size, totalPrice } = item

    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteItem(id))
    }

    return (
        <li className="flex items-center justify-between py-2">
            <p>
                {quantity}&times; {name} ({size})
            </p>
            <div className="flex items-center gap-x-6">
                <p>{formatCurrency(totalPrice)}</p>

                <UpdateItemQuantity itemId={id} currentQuantity={quantity} />

                <Button size="small" onClick={handleDelete}>
                    Delete
                </Button>
            </div>
        </li>
    )
}

export default CartItem
