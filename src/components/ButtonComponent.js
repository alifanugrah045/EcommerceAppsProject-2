import React from 'react'

const ButtonComponent = (props) => {
  return (
    <button
    type={props.buttonType === "submit" ? "submit" : "button"}
    onClick={props.onClick}
    className={props.className}
    >
      {props.label}
    </button>
  )
}

export default ButtonComponent