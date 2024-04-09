import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/todosSlice';

const App = () => {
  const tasks = useSelector(state => state.tasks.tasks); 
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const taskName = prompt('Enter task:');
    if (taskName) {
      dispatch(addTask(taskName));
    }
  };

  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.description} 
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default App;
