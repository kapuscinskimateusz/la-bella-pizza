import { Outlet, useNavigation } from 'react-router'

import Header from './Header'
import Loader from './Loader'
import CartOverview from '../features/cart/CartOverview'

function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />

            <div className="overflow-y-scroll">
                <main className="mx-auto max-w-3xl px-4 sm:px-6">
                    <Outlet />
                </main>
            </div>

            <CartOverview />
        </div>
    )
}

export default AppLayout
