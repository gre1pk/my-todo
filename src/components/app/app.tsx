import React, { useState } from 'react'

import './app.css'
import NewTaskForm from '../new-task-form'
import Title from '../title/title'
import TaskList from '../task-list'
import Footer from '../Footer'
import ItaskList from '../task-list/ItaskList.type'

const createTodoItem = (description: string, timer?: number) => {
  const newObj: ItaskList = {
    description,
    id: Math.random() * 10000,
    done: false,
    date: new Date(),
    timerСount: timer,
  }
  return newObj
}

const taskList = [createTodoItem('Completed task'), createTodoItem('Editing task'), createTodoItem('Active task')]

function App() {
  const [dataTask, setDataTask] = useState(taskList)
  const [filter, setFilter] = useState('All')

  const createNewTask = (text: string, timer: number) => {
    const newTask = createTodoItem(text, timer)
    setDataTask((prevdataTask) => {
      const newArr = [newTask, ...prevdataTask]
      return newArr
    })
  }

  const deleteTask = (id: number) => {
    setDataTask((prevdataTask) => {
      const newDataTask = prevdataTask.filter((el) => el.id !== id)
      return newDataTask
    })
  }

  const onClearTask = () => {
    setDataTask((prevdataTask) => {
      const newArr = prevdataTask.filter((e) => !e.done)
      return newArr
    })
  }

  const onToggleDone = (id: number) => {
    setDataTask((prevdataTask) => {
      const idx = prevdataTask.findIndex((el) => el.id === id)
      const oldItem = prevdataTask[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      const newArr = [...prevdataTask.slice(0, idx), newItem, ...prevdataTask.slice(idx + 1)]
      return newArr
    })
  }

  const onShowTask = () => {
    if (filter === 'Active') {
      return dataTask.filter((e) => !e.done)
    }
    if (filter === 'Completed') {
      return dataTask.filter((e) => e.done)
    }
    return dataTask
  }

  const onFilter = (name: string) => {
    setFilter(name)
  }

  const doneCount = dataTask.filter((el) => !el.done).length
  const showItems = onShowTask()

  return (
    <section className="todoapp">
      <header className="header">
        <Title title="todos" />
        <NewTaskForm onNewTask={createNewTask} />
      </header>
      <section className="main">
        <TaskList todos={showItems} onDeleted={deleteTask} onToggleDone={onToggleDone} />
        <Footer doneCount={doneCount} onClearTask={onClearTask} filter={filter} onFilter={onFilter} />
      </section>
    </section>
  )
}

export default App
