import { createContext, type ReactNode, useContext } from 'react'

import Button from './Button'
import type { ButtonSize, ButtonVariant } from '../types/ui'

interface ContextDefaultValue {
    count: number
    decrease: () => void
    increase: () => void
}

const CounterContext = createContext<ContextDefaultValue | null>(null)

interface CounterProps {
    children: ReactNode
    value: number
    minValue?: number
    step?: number
    onDecrease: (step: number) => void
    onIncrease: (step: number) => void
}

function Counter({
    children,
    value: count,
    minValue = 0,
    step = 1,
    onDecrease,
    onIncrease,
}: CounterProps) {
    const decrease = () => (count > minValue ? onDecrease(step) : undefined)
    const increase = () => onIncrease(step)

    return (
        <CounterContext.Provider value={{ count, decrease, increase }}>
            <span>{children}</span>
        </CounterContext.Provider>
    )
}

function useCounter(componentName = 'A Counter subcomponent') {
    const context = useContext(CounterContext)
    if (!context)
        throw new Error(`${componentName} must be used within <Counter>`)

    return context
}

interface DecreaseIncreaseProps {
    icon?: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
}

function Decrease({
    icon = '-',
    variant = 'primary',
    size = 'medium',
}: DecreaseIncreaseProps) {
    const { decrease } = useCounter('Counter.Decrease')

    return (
        <Button
            {...(variant ? { variant } : {})}
            {...(size ? { size } : {})}
            round
            onClick={decrease}
        >
            {icon}
        </Button>
    )
}

function Increase({
    icon = '+',
    variant = 'primary',
    size = 'medium',
}: DecreaseIncreaseProps) {
    const { increase } = useCounter('Counter.Increase')

    return (
        <Button
            {...(variant ? { variant } : {})}
            {...(size ? { size } : {})}
            round
            onClick={increase}
        >
            {icon}
        </Button>
    )
}

function Count() {
    const { count } = useCounter('Counter.Count')

    return <span>{count}</span>
}

Counter.Decrease = Decrease
Counter.Increase = Increase
Counter.Count = Count

export default Counter
