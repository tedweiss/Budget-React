import React, { Component } from 'react'

import {incomeEntryFormData} from '../Data/entryFormData'

export default class Form extends Component {
  render () {
    const data = {
      income: incomeEntryFormData
    }
    return (
      <div>
        {data[this.props.type].map((input, idx) => {
          return (
            <div key={idx}>
              <label for={input.id}>{input.label}:
                <input
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
