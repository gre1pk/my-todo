import React, { useState } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

function NewTaskForm({ onNewTask }) {
  const regular = /^^\s*$/
  const [label, setLabel] = useState('')
  const [sec, setSec] = useState('')
  const [min, setMin] = useState('')

  const onLabelChange = ({ target }) => {
    setLabel(target.value)
  }

  const onTimerChange = ({ target }) => {
    const { value, name } = target
    if (value < 60) {
      if (name === 'sec') {
        setSec(value.replace(/\D/, ''))
      }
      if (name === 'min') {
        setMin(value.replace(/\D/, ''))
      }
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const invalidText = regular.test(label)
    if (!invalidText) {
      const countSec = min * 60 + +sec
      onNewTask(label, countSec)
      setLabel('')
      setMin('')
      setSec('')
    }
  }

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="new-todo"
        name="label"
        placeholder="What needs to be done?"
        onChange={onLabelChange}
        value={label}
        maxLength="15"
      />
      <input
        type="text"
        className="new-todo-form__timer"
        name="min"
        placeholder="Min"
        onChange={onTimerChange}
        value={min}
        maxLength="2"
      />
      <input
        type="text"
        className="new-todo-form__timer"
        name="sec"
        placeholder="Sec"
        onChange={onTimerChange}
        value={sec}
        maxLength="2"
      />
      <button type="submit" aria-label="submit" />
    </form>
  )
}

NewTaskForm.propTypes = {
  onNewTask: PropTypes.func.isRequired,
}

export default NewTaskForm
