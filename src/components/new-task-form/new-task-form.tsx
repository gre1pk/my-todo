import { useState, ChangeEvent, MouseEvent } from 'react'
import './new-task-form.css'

interface NewTaskFormProps {
  onNewTask: (label: string, countSec: number) => void
}

function NewTaskForm({ onNewTask }: NewTaskFormProps) {
  const regular = /^^\s*$/
  const [label, setLabel] = useState('')
  const [sec, setSec] = useState('')
  const [min, setMin] = useState('')

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value)
  }

  const onTimerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (+value < 60) {
      if (name === 'sec') {
        setSec(value.replace(/\D/, ''))
      }
      if (name === 'min') {
        setMin(value.replace(/\D/, ''))
      }
    }
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const invalidText = regular.test(label)
    if (!invalidText) {
      const countSec = +min * 60 + +sec
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
        maxLength={15}
      />
      <input
        type="text"
        className="new-todo-form__timer"
        name="min"
        placeholder="Min"
        onChange={onTimerChange}
        value={min}
        maxLength={2}
      />
      <input
        type="text"
        className="new-todo-form__timer"
        name="sec"
        placeholder="Sec"
        onChange={onTimerChange}
        value={sec}
        maxLength={2}
      />
      <button type="submit" aria-label="submit" />
    </form>
  )
}

export default NewTaskForm
