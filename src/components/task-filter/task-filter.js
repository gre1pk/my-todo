import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'

function TaskFilter({ filter, onChange }) {
  const filtersBtn = [
    {
      name: 'All',
    },
    {
      name: 'Active',
    },
    {
      name: 'Completed',
    },
  ]

  const buttons = filtersBtn.map((el) => {
    const isActive = filter === el.name
    const classItem = isActive ? 'selected' : ''
    return (
      <li key={el.name}>
        <button
          className={classItem}
          type="button"
          onClick={() => {
            onChange(el.name)
          }}
        >
          {el.name}
        </button>
      </li>
    )
  })
  return <ul className="filters">{buttons}</ul>
}

TaskFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TaskFilter
