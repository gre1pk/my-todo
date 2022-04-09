import React from 'react';
import './task-item.css';

export default class TaskItem extends React.Component {
  render() {
    const { description, onDeleted, onToggleDone, done, taskCreate } =
      this.props;
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
  }
}
