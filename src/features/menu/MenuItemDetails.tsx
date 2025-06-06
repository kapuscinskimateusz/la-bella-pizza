import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { MenuItem, PizzaSize } from '../../types/menu'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import Ingredients from './Ingredients'
import UpdateItemQuantity from './UpdateItemQuantity'
import { formatCurrency, isPizza } from '../../utils/helpers'
import {
    addItem,
    getCartItemById,
    increaseItemQuantity,
} from '../cart/cartSlice'
import type { CartItem } from '../../types/cart'
import SelectPizzaSize from './SelectPizzaSize'

interface MenuItemDetailsProps {
    item: MenuItem
}

function MenuItemDetails({ item }: MenuItemDetailsProps) {
    const { id, name, image, description, category } = item

    const [quantity, setQuantity] = useState(1)
    const [pizzaSize, setPizzaSize] = useState<PizzaSize>('small')

    const totalPrice = isPizza(item)
        ? item.sizes[pizzaSize] * quantity
        : item.price * quantity

    // This is the unique ID the item will have once added to the cart
    const cartItemId = isPizza(item)
        ? generateCartItemId(id, pizzaSize)
        : generateCartItemId(id)

    const cartItem = useSelector(getCartItemById(cartItemId))
    const dispatch = useDispatch()

    function handleAddToCart() {
        if (cartItem) {
            const payload = { itemId: cartItemId, value: quantity }

            dispatch(increaseItemQuantity(payload))
        } else {
            const newItem: CartItem = {
                id: cartItemId,
                name,
                category,
                quantity,
                unitPrice: isPizza(item) ? item.sizes[pizzaSize] : item.price,
                totalPrice,
                ...(isPizza(item) ? { size: pizzaSize } : {}),
            }

            dispatch(addItem(newItem))
        }
    }

    return (
        <Modal>
            <Modal.Open opens="details">
                <Button size="small">Add to cart</Button>
            </Modal.Open>

            <Modal.Window name="details">
                <Modal.Header>
                    <p>{name}</p>
                </Modal.Header>

                <Modal.Body>
                    <div className="space-y-4">
                        <img
                            src={image}
                            alt={`${name} image`}
                            className="max-h-60 w-full object-cover"
                        />

                        <Ingredients item={item} />

                        <p>{description}</p>

                        <SelectPizzaSize
                            item={item}
                            pizzaSize={pizzaSize}
                            setPizzaSize={setPizzaSize}
                        />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className="flex items-center gap-x-6">
                        <UpdateItemQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <div className="flex-grow">
                            <Modal.Close handler={handleAddToCart}>
                                <Button wide>
                                    Add to cart ({formatCurrency(totalPrice)})
                                </Button>
                            </Modal.Close>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal.Window>
        </Modal>
    )
}

export default MenuItemDetails

function generateCartItemId(menuItemId: number, pizzaSize?: PizzaSize) {
    if (!pizzaSize) return `${menuItemId}`

    return [menuItemId, pizzaSize].join('-')
}
