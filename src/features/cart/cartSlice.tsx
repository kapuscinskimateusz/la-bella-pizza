import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import type { CartItem } from '../../types'

const initialState = {
    cart: [] as CartItem[],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            state.cart.push(action.payload)
        },
        increaseItemQuantity(
            state,
            action: PayloadAction<{ itemId: string; value: number }>
        ) {
            const { itemId, value } = action.payload

            const item = state.cart.find((el) => el.id === itemId)
            if (!item) return

            item.quantity += value
            item.totalPrice = item.unitPrice * item.quantity
        },
        clearCart(state) {
            state.cart = []
        },
    },
})

export const { addItem, increaseItemQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer

export const getCart = (store: RootState) => store.cart.cart

export const getTotalCartQuantity = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCartItemById = (id: string) => (store: RootState) =>
    store.cart.cart.find((item) => item.id === id)
