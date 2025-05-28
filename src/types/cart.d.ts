import type { PizzaSize } from './menu'

export interface CartItem {
    id: string
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
    size?: PizzaSize
}
