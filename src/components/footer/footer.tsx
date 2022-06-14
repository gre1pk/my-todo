import './footer.css'
import TaskFilter from '../task-filter'

interface FooterProps {
  doneCount: number
  onClearTask: () => void
  onFilter: (name: string) => void
  filter: string
}

function Footer({ doneCount, onClearTask, onFilter, filter }: FooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TaskFilter onChange={onFilter} filter={filter} />
      <button className="clear-completed" onClick={onClearTask} type="button">
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
