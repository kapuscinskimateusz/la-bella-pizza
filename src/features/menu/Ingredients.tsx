import type { MenuItem } from '../../types/menu'
import { isPizza } from '../../utils/helpers'

interface IngredientsProps {
    item: MenuItem
}

function Ingredients({ item }: IngredientsProps) {
    if (!isPizza(item)) return null

    return (
        <p className="text-sm capitalize italic text-stone-400">
            {item.ingredients.join(', ')}
        </p>
    )
}

export default Ingredients
