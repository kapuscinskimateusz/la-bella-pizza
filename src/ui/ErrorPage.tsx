import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router'
import Button from './Button'

function ErrorPage() {
    const error = useRouteError()
    let errorMessage = ''

    const navigate = useNavigate()

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data || error.statusText
    } else if (error instanceof Error) {
        errorMessage = error.message
    } else if (typeof error === 'string') {
        errorMessage = error
    } else {
        console.error(error)
        errorMessage = 'Unknown error'
    }

    return (
        <div>
            <h1>Something went wrong</h1>
            <p>{errorMessage}</p>

            <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
        </div>
    )
}

export default ErrorPage
