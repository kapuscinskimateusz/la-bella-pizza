import { useDispatch } from 'react-redux'

import { clearCart } from './cartSlice'
import Button from '../../ui/Button'

function ClearCart() {
    const dispatch = useDispatch()

    return (
        <Button variant="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
        </Button>
    )
}

export default ClearCart
