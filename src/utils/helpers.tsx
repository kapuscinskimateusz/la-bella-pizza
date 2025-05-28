import {
    Children,
    isValidElement,
    type ElementType,
    type ReactElement,
    type ReactNode,
} from 'react'

import type { Drink, MenuItem, Pizza, Sauce } from '../types/menu'
import type { CartItem } from '../types/cart'

export function formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}

export function findChildByType<T extends ElementType>(
    children: ReactNode,
    type: T
) {
    return Children.toArray(children).find(
        (child): child is ReactElement<unknown, T> =>
            isValidElement(child) && child.type === type
    )
}

export function isPizza(item: MenuItem | CartItem): item is Pizza {
    return item.category === 'pizza'
}

export function isSauce(item: MenuItem | CartItem): item is Sauce {
    return item.category === 'sauce'
}

export function isDrink(item: MenuItem | CartItem): item is Drink {
    return item.category === 'drink'
}
