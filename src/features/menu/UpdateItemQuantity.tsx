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
            minValue={1}
            onDecrease={(step) => setQuantity((q) => q - step)}
            onIncrease={(step) => setQuantity((q) => q + step)}
        >
            <Counter.Decrease variant="secondary" />
            <span className="mx-2.5 inline-flex min-w-[2ch] justify-center">
                <Counter.Count />
            </span>
            <Counter.Increase variant="secondary" />
        </Counter>
    )
}

export default UpdateItemQuantity
