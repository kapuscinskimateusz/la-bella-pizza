import {
    createContext,
    useState,
    type ReactNode,
    useContext,
    cloneElement,
    type ReactElement,
    type ButtonHTMLAttributes,
    Children,
} from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

import { useOutsideClick } from '../hooks/useOutsideClick'

interface ContextDefaultValue {
    openName: string
    close: () => void
    open: (windowName: string) => void
}

const ModalContext = createContext<ContextDefaultValue | null>(null)

function Modal({ children }: { children: ReactNode }) {
    const [openName, setOpenName] = useState('')

    const close = () => setOpenName('')
    const open = setOpenName

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    )
}

function useModal(componentName = 'A Modal subcomponent') {
    const context = useContext(ModalContext)
    if (context === null)
        throw new Error(`${componentName} must be used within <Modal>`)

    return context
}

interface OpenProps {
    children: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>
    opens: string
}

function Open({ children, opens: opensWindowName }: OpenProps) {
    const { open } = useModal('Modal.Open')

    return cloneElement(children, { onClick: () => open(opensWindowName) })
}

interface CloseProps {
    children: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>
    handler?: () => void
}

function Close({ children, handler }: CloseProps) {
    const { close } = useModal('Modal.Close')

    function handleClick() {
        handler?.()
        close()
    }

    return cloneElement(children, { onClick: handleClick })
}

interface WindowProps {
    children: ReactNode
    name: string
}

function Window({ children, name }: WindowProps) {
    const { openName, close } = useModal('Modal.Window')
    const ref = useOutsideClick(close)

    if (name !== openName) return null

    const allChildren = Children.toArray(children)
    const header = allChildren.find((child: any) => child.type === Modal.Header)
    const body = allChildren.find((child: any) => child.type === Modal.Body)
    const footer = allChildren.find((child: any) => child.type === Modal.Footer)

    return createPortal(
        <div className="overlay flex items-center justify-center">
            <div ref={ref} className="max-w-md bg-stone-700">
                <header className="flex items-center px-4 py-4 sm:px-6">
                    {header}
                    <button onClick={close} className="ml-auto">
                        <X />
                    </button>
                </header>

                {body && <div className="px-4 py-4 sm:px-6">{body}</div>}

                {footer && (
                    <footer className="px-4 py-4 sm:px-6">{footer}</footer>
                )}
            </div>
        </div>,
        document.body
    )
}

Modal.Open = Open
Modal.Close = Close
Modal.Window = Window
Modal.Header = ({ children }: { children: ReactNode }) => <>{children}</>
Modal.Body = ({ children }: { children: ReactNode }) => <>{children}</>
Modal.Footer = ({ children }: { children: ReactNode }) => <>{children}</>

export default Modal
