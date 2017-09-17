import React, { Component } from 'react'

import Form from './form'
import {incomeEntryFormData} from '../Data/entryFormData'

export default class AddEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {showForm: false}
  }
  handleClick = () => {
    if (this.state.showForm) {
      this.setState({showForm: false})
    } else {
      this.setState({showForm: true})
    }
  }
  render () {
    console.log('data', incomeEntryFormData)
    return (
      <div>
        <div onClick={this.handleClick}>Add Entry</div>
        {this.state.showForm &&
          <div>
            {incomeEntryFormData.map((input, idx) => {
              return <div key={idx}>
                <label for={input.id}>{input.label}:
                  <input
                    type={input.type}
                    name={input.id}
                    id={input.id}
                    placeholder={input.placeholder}
                    required={input.required} />
                </label>
              </div>
            })}
          </div>}
      </div>
    )
  }
}
