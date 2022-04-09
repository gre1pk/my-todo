import React from 'react';
import './task-list.css';
import TaskItem from '../task-item';

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((el) => {
    const { id, ...itemsProp } = el;
    return (
      <TaskItem
        {...itemsProp}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
