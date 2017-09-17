import React, { Component } from 'react'

import Form from './form'

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
    return (
      <div>
        <div onClick={this.handleClick}>Add Entry</div>
        {this.state.showForm &&
          <Form type={this.props.type} />}
      </div>
    )
  }
}
