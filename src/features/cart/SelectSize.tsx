import type { MenuItemSize, MenuItemSizes } from '../../types'
import RadioGroup from '../../ui/RadioGroup'
import { formatCurrency } from '../../utils/helpers'

interface SelectSizeProps {
    sizesObj: MenuItemSizes
    selectedSize: MenuItemSize
    onSelect: (size: MenuItemSize) => void
}

function SelectSize({ sizesObj, selectedSize, onSelect }: SelectSizeProps) {
    const sizeOptions = Object.entries(sizesObj).map(
        ([size, price]: [string, number]) => ({
            value: size,
            label: `${size} (${formatCurrency(price)})`,
        })
    )

    return (
        <RadioGroup
            options={sizeOptions}
            name="size"
            selectedValue={selectedSize}
            onChange={(value) => onSelect(value as MenuItemSize)}
        />
    )
}

export default SelectSize
