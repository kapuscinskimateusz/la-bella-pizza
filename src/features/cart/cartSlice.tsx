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
    },
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer

export const getTotalCartQuantity = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (store: RootState) =>
    store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
