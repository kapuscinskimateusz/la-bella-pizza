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
        deleteItem(state, action: PayloadAction<string>) {
            // payload = cartItemId
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItemQuantity(
            state,
            action: PayloadAction<{ id: string; value: number }>
        ) {
            // payload.id = cartItemId
            // payload.value = value added to quantity
            const { id, value } = action.payload

            const item = state.cart.find((el) => el.id === id)
            if (!item) return

            item.quantity += value
            item.totalPrice = item.unitPrice * item.quantity
        },
        decreaseItemQuantity(
            state,
            action: PayloadAction<{ id: string; value: number }>
        ) {
            // payload.id = cartItemId
            // payload.value = value substracted from quantity
            const { id, value } = action.payload

            const item = state.cart.find((el) => el.id === id)
            if (!item) return

            item.quantity -= value
            item.totalPrice = item.unitPrice * item.quantity
        },
        clearCart(state) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (store: RootState) => store.cart.cart

export const getTotalCartQuantity = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)

export const getCartItemById = (id: string) => (store: RootState) =>
    store.cart.cart.find((item) => item.id === id)
