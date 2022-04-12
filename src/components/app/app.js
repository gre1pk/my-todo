import React, { Component } from 'react'

import './app.css'
import NewTaskForm from '../new-task-form'
import Title from '../title'
import TaskList from '../task-list'
import Footer from '../footer'

export default class App extends Component {
  state = {
    dataTask: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task'),
    ],
    filter: 'All',
  }

  createNewTask = (text) => {
    const newTask = this.createTodoItem(text)
    this.setState(({ dataTask }) => {
      const newArr = [newTask, ...dataTask]
      return { dataTask: newArr }
    })
  }

  createTodoItem(description) {
    return {
      description,
      id: Math.random() * 10000,
      done: false,
      date: new Date(),
    }
  }

  deleteTask = (id) => {
    this.setState(({ dataTask }) => {
      const newDataTask = dataTask.filter((el) => el.id !== id)
      return { dataTask: newDataTask }
    })
  }

  onClearTask = () => {
    this.setState(({ dataTask }) => {
      const newArr = dataTask.filter((e) => !e.done)
      return { dataTask: newArr }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ dataTask }) => {
      const idx = dataTask.findIndex((el) => el.id === id)
      const oldItem = dataTask[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      const newArr = [...dataTask.slice(0, idx), newItem, ...dataTask.slice(idx + 1)]
      return { dataTask: newArr }
    })
  }

  onShowTask = () => {
    const { filter, dataTask } = this.state
    if (filter === 'All') {
      return dataTask
    }
    if (filter === 'Active') {
      return dataTask.filter((e) => !e.done)
    }
    if (filter === 'Completed') {
      return dataTask.filter((e) => e.done)
    }
  }

  onFilter = (name) => {
    this.setState({ filter: name })
  }

  render() {
    const { dataTask, filter } = this.state
    const doneCount = dataTask.filter((el) => !el.done).length
    const showItems = this.onShowTask()

    return (
      <section className="todoapp">
        <header className="header">
          <Title />
          <NewTaskForm onNewTask={this.createNewTask} />
        </header>
        <section className="main">
          <TaskList todos={showItems} onDeleted={this.deleteTask} onToggleDone={this.onToggleDone} />
          <Footer doneCount={doneCount} onClearTask={this.onClearTask} filter={filter} onFilter={this.onFilter} />
        </section>
      </section>
    )
  }
}
