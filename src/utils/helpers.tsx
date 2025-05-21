import {
    Children,
    isValidElement,
    type ElementType,
    type ReactElement,
    type ReactNode,
} from 'react'

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
