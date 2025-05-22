import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'

function Cart() {
    const cart = useSelector(getCart)
    const isEmpty = cart.length === 0

    if (isEmpty) return <EmptyCart />

    return (
        <ul>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default Cart
