import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { updateName } from './userSlice'

import Button from '../../ui/Button'
import Input from '../../ui/Input'

function CreateUser() {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!username) return

        dispatch(updateName(username))
        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-stone-400">
                Before we invite you to our menu full of Italian inspiration...
                What is your name?
            </p>

            <Input
                type="text"
                placeholder="Your full name"
                className="mb-8 w-72"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {username !== '' && (
                <div>
                    <Button>Start ordering &rarr;</Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
