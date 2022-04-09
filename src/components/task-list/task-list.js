import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task-list.css';
import TaskItem from '../task-item';

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((el) => {
    const { id, ...itemsProp } = el;

    const timeAfterCreate = formatDistanceToNow(new Date(el.date));

    return (
      <TaskItem
        {...itemsProp}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        taskCreate={timeAfterCreate}
      />
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
