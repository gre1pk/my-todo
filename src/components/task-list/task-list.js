import { formatDistanceToNow } from 'date-fns'

import './task-list.css'
import TaskItem from '../task-item'

function TaskList({ todos, onDeleted, onToggleDone }) {
  const elements = todos.map((el) => {
    const { id, description, done, timerСount } = el
    const taskCreate = formatDistanceToNow(new Date(el.date))

    return (
      <TaskItem
        description={description}
        done={done}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        taskCreate={taskCreate}
        timerСount={timerСount}
      />
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

export default TaskList
