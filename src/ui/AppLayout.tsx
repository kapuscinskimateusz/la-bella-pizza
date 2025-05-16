import { Outlet } from 'react-router'

import Header from './Header'

function AppLayout() {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
            <Header />

            <main>
                <Outlet />
            </main>

            <footer>Footer</footer>
        </div>
    )
}

export default AppLayout
