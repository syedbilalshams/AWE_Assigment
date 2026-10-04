// Task 2: Reusable component.
// It receives one task from the parent (App) through props
// and shows its title and category.
function TaskCard({ task }) {
  return (
    <div className={`task-card cat-${task.category.toLowerCase()}`}>
      <span className="task-id">#{task.id}</span>
      <h3 className="task-title">{task.title}</h3>
      <span className="task-category">{task.category}</span>
    </div>
  )
}

export default TaskCard
