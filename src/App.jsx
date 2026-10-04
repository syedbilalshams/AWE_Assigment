import { useState, useEffect } from 'react'
import TaskCard from './TaskCard.jsx'

function App() {
  // Task 1: tasks are stored in state. Each task has id, title and category.
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Submit Web Engineering assignment', category: 'Academic' },
    { id: 2, title: 'Return books to the central library', category: 'Library' },
    { id: 3, title: 'Attend Computing Society meeting', category: 'Society' },
  ])

  // Task 3: state for the form inputs.
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Academic')

  // Task 4: runs every time the tasks array changes.
  useEffect(() => {
    console.log('Task list updated!')
    console.log('Total number of tasks:', tasks.length)
  }, [tasks])

  // Task 3: event handler for the form's onSubmit.
  function handleAddTask(event) {
    event.preventDefault() // stop the browser from reloading the page

    if (title.trim() === '') return // ignore empty input

    const newTask = {
      // unique id: one more than the biggest id already used
      id: Math.max(...tasks.map((t) => t.id)) + 1,
      title: title.trim(),
      category: category,
    }

    // Make a new array (old tasks + new one) so React re-renders.
    setTasks([...tasks, newTask])
    setTitle('') // clear the input box
  }

  return (
    <div className="board">
      <header className="board-header">
        <h1>Campus Task Board</h1>
        <p>{tasks.length} tasks on the board</p>
      </header>

      <form className="add-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Academic</option>
          <option>Library</option>
          <option>Society</option>
          <option>Sports</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {/* Task 1 + 2: .map() turns each task into a TaskCard with a unique key */}
      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default App
