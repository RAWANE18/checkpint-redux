import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineDoneOutline } from "react-icons/md";
import './Task.css'

export default function Task({ task ,onDelete,completed,onEdit,index}) {
  return (
    <div className="task">
       <span
         style={{ textDecoration: task.isDone ? "line-through" : "none" }}
       >
         {task.description}
       </span>
       <div className="btn">
         <button onClick={() => completed(index)}>
           <MdOutlineDoneOutline />
         </button>
         <button onClick={() => onEdit(index)}>
         <FaRegEdit />
         </button>
         <button onClick={() => onDelete(task.id)} style={{ marginRight: "10px" }}>
           <MdOutlineDelete />
         </button>
       </div>
    </div>
  )
}
