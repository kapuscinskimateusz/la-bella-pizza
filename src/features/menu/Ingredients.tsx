import type { MenuItem } from '../../types/menu'
import { isPizza } from '../../utils/helpers'

interface IngredientsProps {
    item: MenuItem
}

function Ingredients({ item }: IngredientsProps) {
    if (!isPizza(item)) return null

    return (
        <p className="text-xs capitalize italic text-stone-400 sm:text-sm">
            {item.ingredients.join(', ')}
        </p>
    )
}

export default Ingredients
