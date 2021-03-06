import { randUuid } from '@ngneat/falso'
import React from 'react'
import { Itask } from '../App'
import { TaskRow } from './TaskRow'

export interface TaskTableProps {
  tasks: Itask[]
  toggleTask: (task: Itask) => void
  showCompleted?: boolean
  title: string
}

export const TaskTable: React.FC<TaskTableProps> = ({
  tasks,
  toggleTask,
  showCompleted = false,
  title,
}) => {
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {tasks
          .filter((task) => task.done === showCompleted)
          .map((task) => {
            const key = randUuid()
            return <TaskRow key={key} task={task} toggleTask={toggleTask} />
          })}
      </tbody>
    </table>
  )
}
