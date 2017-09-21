import React, { Component } from 'react'

import {incomeEntryFormData} from '../Data/entryFormData'
import {Input} from './input'
import {Textarea} from './textarea'

export default class Form extends Component {
  render () {
    let DisplayInput
    let inputs = {
      date: Input,
      number: Input,
      text: Input,
      textarea: Textarea
    }
    const data = {
      income: incomeEntryFormData
    }
    return (
      <div>
        {data[this.props.type].map((input, idx) => {
          DisplayInput = inputs[input.type]
          return (
            <div key={idx}>
              <label htmlFor={input.id}>{input.label}:
                <DisplayInput
                  type={input.type}
                  name={input.id}
                  id={input.id}
                  placeholder={input.placeholder}
                  required={input.required} />
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}
