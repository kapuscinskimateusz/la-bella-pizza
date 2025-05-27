import { createContext, type ReactNode, useContext } from 'react'
import Button from './Button'
import type { ButtonSize, ButtonVariant } from '../types'

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
    const ctx = useContext(CounterContext)
    if (!ctx)
        throw new Error('Counter.Decrease was used outside of the Counter')

    return (
        <Button
            {...(variant ? { variant } : {})}
            {...(size ? { size } : {})}
            round
            onClick={ctx.decrease}
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
    const ctx = useContext(CounterContext)
    if (!ctx)
        throw new Error('Counter.Increase was used outside of the Counter')

    return (
        <Button
            {...(variant ? { variant } : {})}
            {...(size ? { size } : {})}
            round
            onClick={ctx.increase}
        >
            {icon}
        </Button>
    )
}

function Count() {
    const ctx = useContext(CounterContext)
    if (!ctx) throw new Error('Counter.Count was used outside of the Counter')

    return <span>{ctx.count}</span>
}

Counter.Decrease = Decrease
Counter.Increase = Increase
Counter.Count = Count

export default Counter
