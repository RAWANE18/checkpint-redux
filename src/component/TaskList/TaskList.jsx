import './TaskList.css';
import Task from "../Task/Task";
import { useState, useEffect } from 'react';

function ListTask({ tasks, onDelete, completed, onEdit }) {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState("all"); 

  useEffect(() => {
    if (filter === "done") {
      setFilteredTasks(tasks.filter((task) => task.isDone)); 
    } else if (filter === "notDone") {
      setFilteredTasks(tasks.filter((task) => !task.isDone)); 
    } else {
      setFilteredTasks(tasks); 
    }
  }, [tasks, filter]);

  return (
    <>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={task.id}>
            <Task task={task} onDelete={onDelete} completed={completed} onEdit={onEdit} index={index} />
          </li>
        ))}
      </ul>

      <div className='ctn-button'>
      <button onClick={() => setFilter("all")} className='button'>All</button>
      <button onClick={() => setFilter("done")} className='button'>Done</button>
      <button onClick={() => setFilter("notDone")} className='button'>Not Done</button>
      </div>
    </>
  );
}

export default ListTask;
