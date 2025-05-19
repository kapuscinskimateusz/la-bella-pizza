import {
    createContext,
    useState,
    type ReactNode,
    useContext,
    cloneElement,
    type ReactElement,
    type ButtonHTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'

interface ContextDefaultValue {
    openName: string
    close: () => void
    open: (windowName: string) => void
}

interface OpenProps {
    children: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>
    opens: string
}

interface WindowProps {
    children: ReactNode
    name: string
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

function Open({ children, opens: opensWindowName }: OpenProps) {
    const ctx = useContext(ModalContext)
    if (!ctx) throw new Error('Modal.Open was used outside of the Modal')

    return cloneElement(children, { onClick: () => ctx.open(opensWindowName) })
}

function Window({ children, name }: WindowProps) {
    const ctx = useContext(ModalContext)
    if (!ctx) throw new Error('Modal.Window was used outside of the Modal')

    if (name !== ctx.openName) return null

    return createPortal(
        <div className="overlay flex items-center justify-center">
            <div className="bg-stone-700">{children}</div>
        </div>,
        document.body
    )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
