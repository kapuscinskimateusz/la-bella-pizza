import type { Dispatch, SetStateAction } from 'react'

import Counter from '../../ui/Counter'

interface UpdateItemQuantity {
    quantity: number
    setQuantity: Dispatch<SetStateAction<number>>
}

function UpdateItemQuantity({ quantity, setQuantity }: UpdateItemQuantity) {
    return (
        <Counter
            value={quantity}
            onDecrease={(step) => setQuantity((q) => q - step)}
            onIncrease={(step) => setQuantity((q) => q + step)}
        >
            <Counter.Decrease />
            <span className="mx-3">
                <Counter.Count />
            </span>
            <Counter.Increase />
        </Counter>
    )
}

export default UpdateItemQuantity
