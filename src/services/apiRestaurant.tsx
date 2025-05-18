const API_URL = 'http://localhost:3000'

export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`)
    if (!res.ok) throw new Error('Something went wrong with getting menu')

    const data: MenuItem[] = await res.json()
    return data
}

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
