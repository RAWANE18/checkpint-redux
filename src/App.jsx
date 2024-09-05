import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { addTask, completeTask, editTask, deleteTask, saveEditedTask}from './redux/TodoSlice';
import AddTask from './component/AddTask/AddTask';
import TaskList from './component/TaskList/TaskList';


function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const isEditing = useSelector((state) => state.task.isEditing);
  const editIndex = useSelector((state) => state.task.editIndex);
  console.log("editIndex :::",editIndex);
  console.log("isEditing :::",isEditing);
   

  const handleAddTask = (name) => {
    dispatch(addTask(name));
  };

  const handleCompletedTask = (index) => {
    dispatch(completeTask(index));
   
  };
  
  const handlesaveEditedTask = (description) => {
    dispatch(saveEditedTask(description));
  };


  const handleEditTask = (index) => {
    dispatch(editTask(index));  
  };
 
  
  const handledeletTask = (description) => {
    dispatch(deleteTask(description));
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTask tasks={tasks} onAdd={handleAddTask} onSave={handlesaveEditedTask} isEditing={isEditing} editIndex={editIndex}/>
      <TaskList tasks={tasks} onDelete={handledeletTask} completed={handleCompletedTask} onEdit={handleEditTask}/>
    </div>
  );
}

export default App;