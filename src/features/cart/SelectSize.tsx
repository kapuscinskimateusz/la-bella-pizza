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
        ([size, price]: [string, number]) => {
            const formattedPrice = formatCurrency(price)
            const capitalizedSize = size.replace(size[0], size[0].toUpperCase())

            return {
                value: size,
                label: `${capitalizedSize} (${formattedPrice})`,
            }
        }
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
