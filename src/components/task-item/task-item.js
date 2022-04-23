import PropTypes from 'prop-types'
import React from 'react'
import { format } from 'date-fns'
import './task-item.css'

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerValue: props.timerСount,
      idTimer: null,
      timeActive: false,
    }
  }

  componentDidUpdate(_, prevState) {
    const { timerValue } = this.state
    if (prevState.timerValue !== timerValue && timerValue <= 0) {
      this.setState({ timerValue: 0 })
      this.onStopTimer()
    }
  }

  onStartTimer = () => {
    const teme = setInterval(() => {
      this.setState(({ timerValue }) => {
        const count = timerValue - 1
        return { timerValue: count }
      })
    }, 1000)
    this.setState({ idTimer: teme, timeActive: true })
  }

  onStopTimer = () => {
    const { idTimer } = this.state
    clearInterval(idTimer)
    this.setState({ timeActive: false })
  }

  render() {
    const { description, onDeleted, onToggleDone, done, taskCreate } = this.props
    const { timerValue, timeActive } = this.state
    const timer = format(timerValue * 1000, 'mm:ss')
    const classNames = done ? 'completed' : ''
    const btnTimer = timeActive ? (
      <button className="icon icon-pause" type="button" aria-label="timer stop" onClick={this.onStopTimer} />
    ) : (
      <button className="icon icon-play" type="button" aria-label="timer start" onClick={this.onStartTimer} />
    )

    return (
      <li className={classNames}>
        <div className="view" />
        <input type="checkbox" className="toggle" onChange={onToggleDone} checked={done} />
        <label htmlFor="task">
          <button className="title" onClick={onToggleDone} onKeyDown={onToggleDone} type="button">
            {description}
          </button>
          <span className="description">
            {btnTimer}
            {timer}
          </span>
          <span className="description">{taskCreate}</span>
        </label>
        <button className="icon icon-edit" type="button" aria-label="edit element" />
        <button className="icon icon-destroy" onClick={onDeleted} type="button" aria-label="delete element" />
      </li>
    )
  }
}

TaskItem.defaultProps = {
  description: 'Не задано',
  done: false,
  onToggleDone: () => {},
  onDeleted: () => {},
  taskCreate: new Date(),
  timerСount: 300,
}

TaskItem.propTypes = {
  done: PropTypes.bool,
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  taskCreate: PropTypes.string,
  timerСount: PropTypes.number,
}
