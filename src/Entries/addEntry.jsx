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
              return <input type={input.type} idx={idx} placeholder={input.placeholder} />
            })}
          </div>}
      </div>
    )
  }
}
