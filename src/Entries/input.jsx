import React from 'react'

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      required={props.required} />
  )
}

export {Input}
