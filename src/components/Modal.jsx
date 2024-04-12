import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button"

const Modal = forwardRef(function Modal({children, buttonCaption }, ref) {

    const dialog = useRef()

    useImperativeHandle(ref, ()=>{
        return { 
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>
    , document.getElementById('modal-root'))
})

export default Modal

/*
creating a reusable modal that could be used to show other kinds of information as well.
returning a built-in dialog element, extract the children prop, which is passed to every component
so that I can use my modal in the end as a wrapper around any content I want and that content will then be wrapped by that built-in dialog component.

using the portal feature to render this dialog and the content that will be wrapped by that dialog in a different place of the DOM.


I wanna make sure that we can open this dialog by calling a function that should be exposed by my custom component that does not require the calling component.


Now with that, you learned that this modal component function will receive an extra parameter which will be the ref that might be set from outside on that component.

To now expose a function that can be called from outside this component function, we must use useImperativeHandle.

To this hook, you first pass this ref, which you are receiving.
And then as a second value, you must provide a function that will be called by React in the end where you return an object that then exposes any properties or functions you want to expose to other components.


So open is now a method provided by our component to other components.
*/
