import type { MenuItem, PizzaSize } from '../../types/menu'
import RadioGroup from '../../ui/RadioGroup'
import { formatCurrency, isPizza } from '../../utils/helpers'

interface SelectPizzaSizeProps {
    item: MenuItem
    pizzaSize: PizzaSize
    setPizzaSize: (value: PizzaSize) => void
}

function SelectPizzaSize({
    item,
    pizzaSize,
    setPizzaSize,
}: SelectPizzaSizeProps) {
    if (!isPizza(item)) return null

    const sizeOptions = Object.entries(item.sizes).map(
        ([size, price]: [string, number]) => ({
            value: size,
            label: `${size} (${formatCurrency(price)})`,
        })
    )

    return (
        <RadioGroup
            options={sizeOptions}
            name="size"
            selectedValue={pizzaSize}
            onChange={(value) => setPizzaSize(value as PizzaSize)}
        />
    )
}

export default SelectPizzaSize
