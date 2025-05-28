import { useSelector } from 'react-redux'

import { getTotalCartQuantity } from './cartSlice'

function CartRouteName() {
    const totalCartQuantity = useSelector(getTotalCartQuantity)

    return <span>Cart({totalCartQuantity})</span>
}

export default CartRouteName
