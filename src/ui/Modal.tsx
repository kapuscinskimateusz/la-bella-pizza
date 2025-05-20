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

    const ref = useOutsideClick(ctx.close)

    if (name !== ctx.openName) return null

    const allChildren = Children.toArray(children)
    const header = allChildren.find((child: any) => child.type === Modal.Header)
    const body = allChildren.find((child: any) => child.type === Modal.Body)
    const footer = allChildren.find((child: any) => child.type === Modal.Footer)

    return createPortal(
        <div className="overlay flex items-center justify-center">
            <div ref={ref} className="max-w-md bg-stone-700">
                <header className="flex items-center px-4 py-4 sm:px-6">
                    {header}
                    <button onClick={ctx.close} className="ml-auto">
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
Modal.Window = Window
Modal.Header = ({ children }: { children: ReactNode }) => <>{children}</>
Modal.Body = ({ children }: { children: ReactNode }) => <>{children}</>
Modal.Footer = ({ children }: { children: ReactNode }) => <>{children}</>

export default Modal
