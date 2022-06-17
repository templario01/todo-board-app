import React, { useState } from 'react'

export interface TaskCreatorProps {
  createTask: (taskname: string) => void
}

export const TaskCreator: React.FC<TaskCreatorProps> = ({ createTask }) => {
  const [newTaskName, setNewTaskName] = useState<string>('')
  const [clearInput, setClearInput] = useState<boolean>(true)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (newTaskName.length > 0) {
      createTask(newTaskName)
      setNewTaskName('')
      setClearInput(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          className="form-control"
          value={clearInput ? '' : newTaskName}
          onChange={(e) => {
            setClearInput(false)
            setNewTaskName(e.target.value)
          }}
          type="text"
          placeholder="Enter a new task"
        />
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary btn-sm">
          Save task
        </button>
      </div>
    </form>
  )
}
