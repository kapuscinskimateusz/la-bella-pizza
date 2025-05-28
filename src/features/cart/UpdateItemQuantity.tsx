import { useDispatch } from 'react-redux'
import { Minus, Plus, Trash2 } from 'lucide-react'

import Counter from '../../ui/Counter'
import {
    decreaseItemQuantity,
    deleteItem,
    increaseItemQuantity,
} from './cartSlice'

interface UpdateItemQuantityProps {
    itemId: string
    currentQuantity: number
}

function UpdateItemQuantity({
    itemId,
    currentQuantity,
}: UpdateItemQuantityProps) {
    const dispatch = useDispatch()

    const decreaseIcon =
        currentQuantity > 1 ? <Minus size={16} /> : <Trash2 size={16} />

    function handleDecrease(step: number) {
        if (currentQuantity > 1) {
            dispatch(decreaseItemQuantity({ itemId, value: step }))
        } else {
            dispatch(deleteItem(itemId))
        }
    }

    function handleIncrease(step: number) {
        dispatch(increaseItemQuantity({ itemId, value: step }))
    }

    return (
        <Counter
            value={currentQuantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
        >
            <Counter.Decrease size="small" icon={decreaseIcon} />
            <span className="mx-3">
                <Counter.Count />
            </span>
            <Counter.Increase size="small" icon={<Plus size={16} />} />
        </Counter>
    )
}

export default UpdateItemQuantity
