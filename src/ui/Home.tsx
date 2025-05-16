import CreateUser from '../features/user/CreateUser'

function Home() {
    return (
        <div>
            <h1>Welcome to La Bella Pizza - a place where taste is art</h1>
            <p>
                Before we invite you to our menu full of Italian inspiration...
            </p>

            <CreateUser />
        </div>
    )
}

export default Home
