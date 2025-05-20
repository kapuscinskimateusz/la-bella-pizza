import { useEffect, useRef } from 'react'

export function useOutsideClick(handler: () => void, useCapture = true) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                ref.current &&
                e.target instanceof Node &&
                !ref.current.contains(e.target)
            ) {
                handler()
            }
        }

        document.addEventListener('click', handleClick, useCapture)

        return () =>
            document.removeEventListener('click', handleClick, useCapture)
    }, [handler, useCapture])

    return ref
}
