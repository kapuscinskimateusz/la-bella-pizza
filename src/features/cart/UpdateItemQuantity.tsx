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
        currentQuantity > 1 ? <Minus size={12} /> : <Trash2 size={12} />

    function handleDecrease(step: number) {
        if (currentQuantity > 1) {
            dispatch(decreaseItemQuantity({ id: itemId, value: step }))
        } else {
            dispatch(deleteItem(itemId))
        }
    }

    function handleIncrease(step: number) {
        dispatch(increaseItemQuantity({ id: itemId, value: step }))
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
            <Counter.Increase size="small" icon={<Plus size={12} />} />
        </Counter>
    )
}

export default UpdateItemQuantity
