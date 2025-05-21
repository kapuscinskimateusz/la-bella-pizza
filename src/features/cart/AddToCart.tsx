import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import type { CartItem, MenuItem } from '../../types'
import Button from '../../ui/Button'
import Counter from '../../ui/Counter'
import Modal from '../../ui/Modal'
import { addItem } from './cartSlice'

interface AddToCartProps {
    item: MenuItem
}

function AddToCart({ item }: AddToCartProps) {
    const { id, name, ingredients, description, sizes } = item

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    function handleAdd() {
        const newItem: CartItem = {
            id,
            name,
            quantity,
            unitPrice: sizes.small,
            totalPrice: sizes.small * quantity,
        }

        dispatch(addItem(newItem))
    }

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

                        <Modal.Close handler={handleAdd}>
                            <Button>Add to cart</Button>
                        </Modal.Close>
                    </div>
                </Modal.Footer>
            </Modal.Window>
        </Modal>
    )
}

export default AddToCart
