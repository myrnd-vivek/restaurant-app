import React from 'react'
import { createPortal } from 'react-dom'
        
const portalEl =  document.getElementById("overlay")

const Modal = (props) => {
  return (
    <>
      {
        createPortal(
          props.children,portalEl
        )
      }
    </>
  )
}

export default Modal