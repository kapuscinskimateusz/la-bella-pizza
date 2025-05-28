import {
    Children,
    isValidElement,
    type ElementType,
    type ReactElement,
    type ReactNode,
} from 'react'

import type { Drink, MenuItem, Pizza, Sauce } from '../types/menu'

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

export function isPizza(item: MenuItem): item is Pizza {
    return item.category === 'pizza'
}

export function isSauce(item: MenuItem): item is Sauce {
    return item.category === 'sauce'
}

export function isDrink(item: MenuItem): item is Drink {
    return item.category === 'drink'
}
