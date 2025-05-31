export type Category = 'pizza' | 'sauce' | 'drink'

export type SortField = 'name' | 'price'

export type SortDirection = 'asc' | 'desc'

export type SortValue = `${SortField}-${SortDirection}`

interface BaseMenuItem {
    id: number
    name: string
    category: Category
    description: string
    image: string
    soldOut: boolean
}

export type PizzaTag = 'vegetarian' | 'classic' | 'spicy'

export type PizzaSize = keyof PizzaSizes

export interface PizzaSizes {
    small: number
    medium: number
    large: number
}

export interface Pizza extends BaseMenuItem {
    category: 'pizza'
    tags: PizzaTag[]
    ingredients: string[]
    sizes: PizzaSizes
}

export interface Sauce extends BaseMenuItem {
    category: 'sauce'
    price: number
}

export interface Drink extends BaseMenuItem {
    category: 'drink'
    price: number
}

export type MenuItem = Pizza | Sauce | Drink
