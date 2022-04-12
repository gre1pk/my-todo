import React from 'react';
import './new-task-form.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onNewTask(this.state.label);
    this.setState({
      label: '',
    });
  };

  static propTypes = {
    onNewTask: PropTypes.func.isRequired,
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelChange}
          value={this.state.label}
        />
      </form>
    );
  }
}
