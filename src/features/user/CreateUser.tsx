import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'

import Button from '../../ui/Button'

function CreateUser() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>What is your name?</p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && <Button>Start ordering</Button>}
        </form>
    )
}

export default CreateUser
