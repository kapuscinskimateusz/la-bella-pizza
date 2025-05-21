import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import type { MenuItem } from '../../types'
import Button from '../../ui/Button'
import Counter from '../../ui/Counter'
import Modal from '../../ui/Modal'

interface AddToCartProps {
    item: MenuItem
}

function AddToCart({ item }: AddToCartProps) {
    const { name, ingredients, description } = item

    const [quantity, setQuantity] = useState(1)

    return (
        <Modal>
            <Modal.Open opens="add">
                <Button size="small">Add to cart</Button>
            </Modal.Open>

            <Modal.Window name="add">
                <Modal.Header>
                    <p className="text-lg font-medium">{name}</p>
                </Modal.Header>

                <Modal.Body>
                    <p className="mb-4 text-sm capitalize italic text-stone-400">
                        {ingredients.join(', ')}
                    </p>
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <div className="flex items-center justify-between">
                        <Counter
                            count={quantity}
                            min={1}
                            setCount={setQuantity}
                        >
                            <div className="flex items-center gap-x-4">
                                <Counter.Decrease icon={<Minus size={20} />} />
                                <Counter.Count />
                                <Counter.Increase icon={<Plus size={20} />} />
                            </div>
                        </Counter>

                        <Button>Add to cart</Button>
                    </div>
                </Modal.Footer>
            </Modal.Window>
        </Modal>
    )
}

export default AddToCart
