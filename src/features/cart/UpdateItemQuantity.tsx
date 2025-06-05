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

    const isRemovable = currentQuantity === 1

    const decreaseIcon = isRemovable ? (
        <Trash2 size={16} />
    ) : (
        <Minus size={16} />
    )

    function handleDecrease(step: number) {
        if (isRemovable) dispatch(deleteItem(itemId))
        else dispatch(decreaseItemQuantity({ itemId, value: step }))
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
            <span className="mx-2.5 inline-flex min-w-[2ch] justify-center">
                <Counter.Count />
            </span>
            <Counter.Increase size="small" icon={<Plus size={16} />} />
        </Counter>
    )
}

export default UpdateItemQuantity
