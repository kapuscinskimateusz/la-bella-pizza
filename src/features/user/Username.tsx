import { useSelector } from 'react-redux'
import { getUsername } from './userSlice'

function Username() {
    const username = useSelector(getUsername)

    if (!username) return null

    return <p>{username}</p>
}

export default Username
