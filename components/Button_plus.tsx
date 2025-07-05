import React from 'react'

interface Props{
    onClick: () => void;
}

const Button_plus = ({onClick}: Props) => {
  return (
    <button type="button" className="btn btn-success" onClick={onClick}>+</button>
  )
}

export default Button_plus