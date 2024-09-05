
import {  useEffect, useState } from "react";
import './AddTask.css'
export default function AddTask({onAdd,editIndex,onSave,isEditing,tasks}) {
  /* input variable value */
  const [description, setDescription] = useState("");
  
  /* validation message */
  const [message, setMessage] = useState("");

  
/* fills in form fields with task details when editing */
useEffect(() => {
    if (isEditing) {
      const taskToEdit = tasks[editIndex];
      setDescription(taskToEdit.description);
     
    } else {
      setDescription("");
     
    }
  }, [isEditing, editIndex]);
/* function to handle the add action and edit and for the form validation  */
function handleAddTask(e) {
    e.preventDefault();
    if (description.trim() !== "") {
      if (isEditing) {
        onSave(description);
      } else {
        onAdd(description);
      }
      setDescription("");
      setMessage("");
    } else {
      setMessage("Please enter a task description");
    }
  }

  return (
    <form onSubmit={handleAddTask}>
         {/* displaying validation message */}
      {message && (
        <p style={{ color: "red", marginBottom: "10px", fontSize: "13px" }}>
          {message}
        </p>
      )}
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task-description"
      />
     
      <button type="submit">add</button>
     
    </form>
  );
}