import React from 'react'

const Textarea = (props) => {
  return (
    <textarea
      type={props.type}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      required={props.required} />
  )
}

export {Textarea}
