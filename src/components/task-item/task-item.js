import React from 'react';
import PropTypes from 'prop-types';
import './task-item.css';

const TaskItem = ({
  description,
  onDeleted,
  onToggleDone,
  done,
  taskCreate,
}) => {
  let classNames;
  if (done) {
    classNames = 'completed';
  }

  return (
    <li className={classNames}>
      <div className="view"></div>
      <input type="checkbox" className="toggle" />
      <label onClick={onToggleDone}>
        <span className="description">{description}</span>
        <span className="created"> {taskCreate} </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </li>
  );
};

TaskItem.defaultProps = {
  description: 'Не задано',
  done: false,
  onToggleDone: () => {},
  onDeleted: () => {},
  taskCreate: new Date(),
};

TaskItem.propTypes = {
  done: PropTypes.bool,
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  taskCreate: PropTypes.string,
};

export default TaskItem;
