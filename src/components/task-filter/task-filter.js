import React from 'react';
import './task-filter.css';

class TaskFilter extends React.Component {
  filtersBtn = [
    {
      name: 'All',
    },
    {
      name: 'Active',
    },
    {
      name: 'Completed',
    },
  ];

  render() {
    const { filter , onChange } = this.props;

    const buttons = this.filtersBtn.map((el) => {
      const isActive = filter === el.name;
      const classItem = isActive ? 'selected' : '';
      return (
        <li key={el.name}>
          <button
            className={classItem}
            onClick={() => {
              onChange(el.name);
            }}
          >
            {el.name}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}

export default TaskFilter;