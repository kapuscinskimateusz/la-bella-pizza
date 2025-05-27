import { useDispatch, useSelector } from 'react-redux'

import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import Button from '../../ui/Button'

function Cart() {
    const cart = useSelector(getCart)
    const isEmpty = cart.length === 0

    const dispatch = useDispatch()

    if (isEmpty) return <EmptyCart />

    return (
        <div>
            <ul className="divide-y divide-stone-700">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>

            <Button variant="secondary" onClick={() => dispatch(clearCart())}>
                Clear cart
            </Button>
        </div>
    )
}

export default Cart
