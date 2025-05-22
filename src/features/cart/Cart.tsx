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

    function handleClear() {
        dispatch(clearCart())
    }

    return (
        <div>
            <ul>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>

            <Button variant="secondary" onClick={handleClear}>
                Clear cart
            </Button>
        </div>
    )
}

export default Cart
