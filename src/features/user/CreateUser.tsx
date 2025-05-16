import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

function CreateUser() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <Button>Start ordering</Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
