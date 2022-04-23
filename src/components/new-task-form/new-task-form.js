import React from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      sec: '',
      min: '',
    }
    this.regular = /^^\s*$/
  }

  onLabelChange = ({ target }) => {
    this.setState({
      label: target.value,
    })
  }

  onTimerChange = ({ target }) => {
    const { name, value } = target
    if (value < 60) {
      this.setState({
        [name]: value.replace(/\D/, ''),
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { label, sec, min } = this.state
    const { onNewTask } = this.props
    const invalidText = this.regular.test(label)
    if (!invalidText) {
      const countSec = min * 60 + +sec
      onNewTask(label, countSec)
      this.setState({
        label: '',
        sec: '',
        min: '',
      })
    }
  }

  render() {
    const { label, sec, min } = this.state
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          name="label"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
          maxLength="15"
        />
        <input
          type="text"
          className="new-todo-form__timer"
          name="min"
          placeholder="Min"
          onChange={this.onTimerChange}
          value={min}
          maxLength="2"
        />
        <input
          type="text"
          className="new-todo-form__timer"
          name="sec"
          placeholder="Sec"
          onChange={this.onTimerChange}
          value={sec}
          maxLength="2"
        />
        <button type="submit" aria-label="submit" />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onNewTask: PropTypes.func.isRequired,
}
