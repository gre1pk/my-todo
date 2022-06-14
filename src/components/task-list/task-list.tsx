import { formatDistanceToNow } from 'date-fns'

import './task-list.css'
import TaskItem from '../task-item'

import ItaskList from './ItaskList.type'

interface TaskListProps {
  todos: Array<ItaskList>
  onDeleted: (id: number) => void
  onToggleDone: (id: number) => void
}

function TaskList({ todos, onDeleted, onToggleDone }: TaskListProps) {
  const elements = todos.map((el) => {
    const { id, description, done, timerСount = 0 } = el
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
