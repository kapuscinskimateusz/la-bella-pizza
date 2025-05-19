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
