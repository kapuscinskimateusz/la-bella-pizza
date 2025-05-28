import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { MenuItem, PizzaSize } from '../../types/menu'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'
import Ingredients from './Ingredients'
import UpdateItemQuantity from './UpdateItemQuantity'
import { isPizza } from '../../utils/helpers'
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
    const { id, name, description, category } = item

    const [quantity, setQuantity] = useState(1)
    const [pizzaSize, setPizzaSize] = useState<PizzaSize>('small')

    // This is the unique ID the item will have once added to the cart
    const cartItemId = generateCartItemId(
        id,
        isPizza(item) ? pizzaSize : undefined
    )

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
                totalPrice: isPizza(item)
                    ? item.sizes[pizzaSize] * quantity
                    : item.price * quantity,
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
                    <Ingredients item={item} />

                    <p>{description}</p>

                    <SelectPizzaSize
                        item={item}
                        pizzaSize={pizzaSize}
                        setPizzaSize={setPizzaSize}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <div className="flex justify-between">
                        <UpdateItemQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />

                        <Modal.Close handler={handleAddToCart}>
                            <Button>Add to cart</Button>
                        </Modal.Close>
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
