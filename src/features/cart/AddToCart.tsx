import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { MenuItemSize, MenuItem, CartItem } from '../../types'
import Button from '../../ui/Button'
import Counter from '../../ui/Counter'
import Modal from '../../ui/Modal'
import { addItem, getCartItemById, increaseItemQuantity } from './cartSlice'
import SelectSize from './SelectSize'

interface AddToCartProps {
    item: MenuItem
}

function AddToCart({ item }: AddToCartProps) {
    const { id, name, ingredients, description, sizes } = item

    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState<MenuItemSize>('small')

    const cartItemId = [id, size].join('-')
    const cartItem = useSelector(getCartItemById(cartItemId))
    const dispatch = useDispatch()

    function handleAdd() {
        if (cartItem) {
            dispatch(increaseItemQuantity({ cartItemId, value: quantity }))
        } else {
            const newItem: CartItem = {
                id: cartItemId,
                name,
                size,
                quantity,
                unitPrice: sizes[size],
                totalPrice: sizes[size] * quantity,
            }

            dispatch(addItem(newItem))
        }

        setQuantity(1)
        setSize('small')
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
                    <div className="space-y-4">
                        <p className="text-sm capitalize italic text-stone-400">
                            {ingredients.join(', ')}
                        </p>
                        <p>{description}</p>
                        <SelectSize
                            sizesObj={sizes}
                            selectedSize={size}
                            onSelect={setSize}
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className="flex items-center justify-between">
                        <Counter
                            value={quantity}
                            minValue={1}
                            onDecrease={(step) =>
                                setQuantity((quantity) => quantity - step)
                            }
                            onIncrease={(step) =>
                                setQuantity((quantity) => quantity + step)
                            }
                        >
                            <Counter.Decrease variant="secondary" />
                            <span className="mx-3 text-sm font-medium">
                                <Counter.Count />
                            </span>
                            <Counter.Increase variant="secondary" />
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
