import React from 'react'
import './button.css'

function Button({ onClick = () => { }, type = 'button', label = '', selected = false }) {
  return (
    <button type={type} label={label} onClick={onClick} className={selected ? 'button button--selected' : 'button'}>{label}</button>
  )
}

export default Button