import React from 'react'
import './task-filter.css'

interface TaskFilterProps {
  filter: string
  onChange: (el: string) => void
}

function TaskFilter({ filter, onChange }: TaskFilterProps) {
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

export default TaskFilter
