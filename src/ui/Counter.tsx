import { createContext, type ReactNode, useContext, type Dispatch } from 'react'
import Button from './Button'
import type { ButtonSize, ButtonVariant } from '../types'

interface ContextDefaultValue {
    count: number
    decrease: () => void
    increase: () => void
}

interface CounterProps {
    children: ReactNode
    count: number
    setCount: Dispatch<React.SetStateAction<number>>
    min?: number
}

const CounterContext = createContext<ContextDefaultValue | null>(null)

function Counter({ children, count, setCount, min = 0 }: CounterProps) {
    const decrease = () =>
        setCount((count) => (count > min ? count - 1 : count))
    const increase = () => setCount((count) => count + 1)

    return (
        <CounterContext.Provider value={{ count, decrease, increase }}>
            <span>{children}</span>
        </CounterContext.Provider>
    )
}

interface DecreaseIncreaseProps {
    icon: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
}

function Decrease({
    icon,
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
    icon,
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
