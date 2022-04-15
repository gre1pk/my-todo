import PropTypes from 'prop-types'
import './task-item.css'

function TaskItem({ description, onDeleted, onToggleDone, done, taskCreate }) {
  let classNames

  if (done) {
    classNames = 'completed'
  }

  return (
    <li className={classNames}>
      <div className="view" />
      <input type="checkbox" className="toggle" onChange={onToggleDone} checked={done} />
      <label htmlFor="first-name">
        <button className="description" onClick={onToggleDone} onKeyDown={onToggleDone} type="button">
          {description}
        </button>
        <span className="created"> {taskCreate} </span>
      </label>
      <button className="icon icon-edit" type="button" aria-label="edit element" />
      <button className="icon icon-destroy" onClick={onDeleted} type="button" aria-label="delete element" />
    </li>
  )
}

TaskItem.defaultProps = {
  description: 'Не задано',
  done: false,
  onToggleDone: () => {},
  onDeleted: () => {},
  taskCreate: new Date(),
}

TaskItem.propTypes = {
  done: PropTypes.bool,
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  taskCreate: PropTypes.string,
}

export default TaskItem
