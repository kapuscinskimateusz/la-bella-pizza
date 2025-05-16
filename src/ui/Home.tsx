import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import { getUsername } from '../features/user/userSlice'
import Button from './Button'

function Home() {
    const username = useSelector(getUsername)

    return (
        <div className="my-10 text-center sm:my-16">
            <h1 className="mb-8 text-xl md:text-3xl">
                👋 Welcome to{' '}
                <strong className="text-red-700">La Bella Pizza</strong> - a
                place where taste is art
            </h1>

            {username === '' ? (
                <CreateUser />
            ) : (
                <>
                    <p className="mb-8 text-stone-400">
                        Hello,{' '}
                        <span className="text-stone-200">{username}</span>!
                        Welcome to our Italian kitchen, where every pizza tells
                        its own story.
                        <br />
                        It's time to discover something delicious...
                    </p>

                    <Button to="/menu">Go to menu</Button>
                </>
            )}
        </div>
    )
}

export default Home
