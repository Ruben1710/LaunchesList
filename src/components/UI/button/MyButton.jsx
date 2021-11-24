import React from 'react'
import cl from "./MyButton.module.css"
function MyButton({children, ...props}) {
    return (
        <button {...props} className={cl.mybutton}>
            {children}
        </button>
    )
}

export default MyButton
