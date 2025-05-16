import CreateUser from '../features/user/CreateUser'

function Home() {
    return (
        <div className="text-center">
            <h1 className="text-xl md:text-3xl">
                👋 Welcome to{' '}
                <strong className="text-red-700">La Bella Pizza</strong> - a
                place where taste is art
            </h1>
            <p className="text-stone-400">
                Before we invite you to our menu full of Italian inspiration...
                What is your name?
            </p>

            <CreateUser />
        </div>
    )
}

export default Home
