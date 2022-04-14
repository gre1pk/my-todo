import PropTypes from 'prop-types'

import './footer.css'
import TaskFilter from '../task-filter'

function Footer({ doneCount, onClearTask, onFilter, filter }) {
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

Footer.defaultProps = {
  filter: 'All',
  doneCount: 0,
  onClearTask: () => {},
  onFilter: () => {},
}

Footer.propTypes = {
  filter: PropTypes.string,
  doneCount: PropTypes.number,
  onClearTask: PropTypes.func,
  onFilter: PropTypes.func,
}

export default Footer
