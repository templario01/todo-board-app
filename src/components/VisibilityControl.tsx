import React from 'react'

export interface VisibilityControlProps {
  setShowCompleted: (checked: boolean) => void
  cleanTasks: () => void
  isChecked: boolean
}

export const VisibilityControl: React.FC<VisibilityControlProps> = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it')) {
      cleanTasks()
    }
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label htmlFor="">Show Tasks Done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  )
}
