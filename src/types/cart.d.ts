import type { Category, PizzaSize } from './menu'

export interface CartItem {
    id: string
    name: string
    category: Category
    quantity: number
    unitPrice: number
    totalPrice: number
    size?: PizzaSize
}
