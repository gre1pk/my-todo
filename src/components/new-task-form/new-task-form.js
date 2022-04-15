import React from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
    }
    this.regular = /^^\s*$/
  }

  onLabelChange = ({ target }) => {
    this.setState({
      label: target.value,
    })
  }

  onSubmit = (e) => {
    const { label } = this.state
    const { onNewTask } = this.props
    e.preventDefault()
    const invalidText = this.regular.test(label)
    if (!invalidText) {
      onNewTask(label)
      this.setState({
        label: '',
      })
    }
  }

  render() {
    const { label } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onNewTask: PropTypes.func.isRequired,
}
