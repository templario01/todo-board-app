import React from 'react'
import { Itask } from '../App'

export interface TaskRowProps {
  task: Itask
  toggleTask: (task: Itask) => void
}

export const TaskRow: React.FC<TaskRowProps> = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => {
            toggleTask(task)
          }}
        />
      </td>
    </tr>
  )
}
