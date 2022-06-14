import React, { FC, useEffect, useState } from 'react'
import { format } from 'date-fns'
import './task-item.css'

interface TaskItemProps {
  done: boolean
  description: string
  onDeleted: () => void
  onToggleDone: () => void
  taskCreate: string
  timerСount: number
}

function TaskItem({ done, description, onDeleted, onToggleDone, taskCreate, timerСount = 0 }: TaskItemProps) {
  const [timerValue, setTimerValue] = useState(timerСount)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const start = Date.now()
    let timerId: NodeJS.Timeout | undefined

    if (isActive) {
      timerId = setInterval(() => {
        if (timerValue > 1) {
          const delta = Date.now() - start
          setTimerValue((prevTime) => prevTime - delta / 1000)
        } else {
          setTimerValue(0)
          setIsActive(false)
        }
      }, 1000)
    }

    return () => clearInterval(timerId)
  }, [timerValue, isActive])

  const onStartTimer = () => {
    setIsActive(true)
  }

  const onStopTimer = () => {
    setIsActive(false)
  }

  const handlerDone = () => {
    onStopTimer()
    onToggleDone()
  }

  const timer = format(timerValue * 1000, 'mm:ss')
  const classNames = done ? 'completed' : ''
  const disbldBtn = done ? true : false
  const btnTimer = isActive ? (
    <button className="icon icon-pause" type="button" aria-label="timer stop" onClick={onStopTimer} />
  ) : (
    <button
      className="icon icon-play"
      type="button"
      disabled={disbldBtn}
      aria-label="timer start"
      onClick={onStartTimer}
    />
  )

  return (
    <li className={classNames}>
      <div className="view" />
      <input type="checkbox" className="toggle" onChange={handlerDone} checked={done} />
      <label htmlFor="task">
        <button className="title" onClick={handlerDone} onKeyDown={handlerDone} type="button">
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

export default TaskItem
