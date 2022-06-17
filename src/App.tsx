import { useState, useEffect } from 'react'
import './App.css'
import { Container } from './components/Container'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

export interface Itask {
  name?: string
  done?: boolean
}

function App() {
  const [taskItems, setTaskItems] = useState<Itask[]>([])
  const [showCompleted, setShowCompleted] = useState<boolean>(false)

  function createTask(taskname: string) {
    setTaskItems([...taskItems, { name: taskname, done: false }])
  }

  const toggleTask = (task: Itask) => {
    const updateTasks = taskItems.map((t) => {
      return t.name === task.name ? { ...t, done: !t.done } : t
    })
    setTaskItems(updateTasks)
  }

  const cleanTasks = () => {
    const tasksDone = taskItems.filter((task) => !task.done)
    setTaskItems(tasksDone)
    setShowCompleted(false)
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data) as Itask[])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  )
}

export default App
