export type ButtonVariant = 'primary' | 'secondary'

export type ButtonSize = 'small' | 'medium'

export interface MenuItem {
    id: number
    name: string
    description: string
    ingredients: string[]
    sizes: {
        small: number
        medium: number
        large: number
    }
    image: string
    soldOut: boolean
}

export interface CartItem {
    id: number
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
}
