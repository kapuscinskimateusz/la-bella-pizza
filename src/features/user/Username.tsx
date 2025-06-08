import { useSelector } from 'react-redux'

import { getUsername } from './userSlice'

interface UsernameProps {
    className?: string
}

function Username({ className = '' }: UsernameProps) {
    const username = useSelector(getUsername)

    if (!username) return null

    return <p className={className}>{username}</p>
}

export default Username
