import { useSelector } from 'react-redux'

import { getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import ClearCart from './ClearCart'

function Cart() {
    const cart = useSelector(getCart)
    const isEmpty = cart.length === 0

    if (isEmpty) return <EmptyCart />

    return (
        <div>
            <ul className="divide-y divide-stone-700">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>

            <ClearCart />
        </div>
    )
}

export default Cart
