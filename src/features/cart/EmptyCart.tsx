import { ArrowLeft } from 'lucide-react'
import Button from '../../ui/Button'

function EmptyCart() {
    return (
        <div>
            <p>Your cart is empty</p>
            <Button to="/menu">
                <ArrowLeft size={20} />
                &nbsp;Go to menu
            </Button>
        </div>
    )
}

export default EmptyCart
