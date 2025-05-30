import {
    Children,
    cloneElement,
    isValidElement,
    type ReactElement,
} from 'react'

import type {
    ButtonGroupPosition,
    ButtonSize,
    ButtonVariant,
} from '../types/ui'
import type { ButtonProps } from './Button'

interface ButtonGroupProps {
    children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[]
    variant?: ButtonVariant
    size?: ButtonSize
}

function ButtonGroup({
    children,
    variant = 'primary',
    size = 'medium',
}: ButtonGroupProps) {
    const count = Children.count(children)

    const modifiedChildren = Children.map(children, (child, index) => {
        if (!isValidElement<ButtonProps>(child)) return child

        let groupPosition: ButtonGroupPosition = 'middle'
        if (count === 1) groupPosition = 'only'
        else if (index === 0) groupPosition = 'first'
        else if (index === count - 1) groupPosition = 'last'

        return cloneElement(child, {
            groupPosition,
            variant,
            size,
        })
    })

    return <div className="inline-flex">{modifiedChildren}</div>
}

export default ButtonGroup
