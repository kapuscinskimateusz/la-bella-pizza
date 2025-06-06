// import type { MenuItem } from '../types/menu'

// const API_URL = 'http://localhost:3000'

import data from '@/data/db.json'

export async function getMenu() {
    // const res = await fetch(`${API_URL}/menu`)
    // if (!res.ok) throw new Error('Something went wrong with getting menu')

    // const data: MenuItem[] = await res.json()
    // return data

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.menu)
        }, 1000)
    })
}
