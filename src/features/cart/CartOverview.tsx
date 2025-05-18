import { useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router'
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice'

function CartOverview() {
    const location = useLocation()
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice = useSelector(getTotalCartPrice)

    if (location.pathname !== '/menu' || totalCartQuantity === 0) return null

    return (
        <div className="flex items-center justify-between bg-stone-900 px-4 py-4 text-sm uppercase sm:px-6 md:text-base">
            <p className="space-x-4 font-semibold sm:space-x-6">
                <span>{totalCartQuantity} pizzas</span>
                <span>{totalCartPrice.toFixed(2)}</span>
            </p>

            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartOverview
