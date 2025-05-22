export type ButtonVariant = 'primary' | 'secondary'

export type ButtonSize = 'small' | 'medium'

export type MenuItemSize = 'small' | 'medium' | 'large'

export interface MenuItemSizes {
    small: number
    medium: number
    large: number
}

export interface MenuItem {
    id: number
    name: string
    description: string
    ingredients: string[]
    sizes: MenuItemSizes
    image: string
    soldOut: boolean
}

export interface CartItem {
    id: string
    name: string
    size: string
    quantity: number
    unitPrice: number
    totalPrice: number
}
