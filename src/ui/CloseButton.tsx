import { X } from 'lucide-react'

interface CloseButtonProps {
    onClick: () => void
    className?: string
}

function CloseButton({ onClick, className = '' }: CloseButtonProps) {
    return (
        <button type="button" onClick={onClick} className={className}>
            <X />
        </button>
    )
}

export default CloseButton
