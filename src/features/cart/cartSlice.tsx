import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

const initialState = {
    cart: [] as any[], // TODO - any
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
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
