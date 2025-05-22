import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus } from 'lucide-react'

import type { MenuItemSize, CartItem, MenuItem } from '../../types'
import Button from '../../ui/Button'
import Counter from '../../ui/Counter'
import Modal from '../../ui/Modal'
import { addItem, getCartItemById, increaseItemQuantity } from './cartSlice'
import { formatCurrency } from '../../utils/helpers'
import RadioGroup from '../../ui/RadioGroup'

interface AddToCartProps {
    item: MenuItem
}

function AddToCart({ item }: AddToCartProps) {
    const { id: baseId, name, ingredients, description, sizes } = item

    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState<MenuItemSize>('small')

    const newId = [baseId, selectedSize].join('-')
    const sizeOptions = Object.entries(sizes).map(
        ([size, price]: [string, number]) => {
            const formattedPrice = formatCurrency(price)
            const capitalizedSize = size.replace(size[0], size[0].toUpperCase())

            return {
                value: size,
                label: `${capitalizedSize} (${formattedPrice})`,
            }
        }
    )

    const cartItem = useSelector(getCartItemById(newId))
    const dispatch = useDispatch()

    function handleAdd() {
        if (cartItem) {
            dispatch(increaseItemQuantity({ itemId: newId, value: quantity }))
        } else {
            const newItem: CartItem = {
                id: newId,
                name,
                size: selectedSize,
                quantity,
                unitPrice: sizes[selectedSize],
                totalPrice: sizes[selectedSize] * quantity,
            }

            dispatch(addItem(newItem))
        }

        setQuantity(1)
        setSelectedSize('small')
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
                        <RadioGroup
                            options={sizeOptions}
                            name="size"
                            selectedValue={selectedSize}
                            onChange={(value) =>
                                setSelectedSize(value as MenuItemSize)
                            }
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className="flex items-center justify-between">
                        <Counter
                            count={quantity}
                            min={1}
                            setCount={setQuantity}
                        >
                            <div className="flex items-center">
                                <Counter.Decrease
                                    variant="secondary"
                                    icon={<Minus size={20} />}
                                />
                                <span className="mx-3 text-sm font-medium">
                                    <Counter.Count />
                                </span>
                                <Counter.Increase
                                    variant="secondary"
                                    icon={<Plus size={20} />}
                                />
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
