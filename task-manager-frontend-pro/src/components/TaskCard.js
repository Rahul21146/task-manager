import React from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function TaskCard({task,reload}){

const deleteTask = async()=>{
 await api.delete(`/tasks/${task.id}`);
 toast.success("Task deleted");
 reload();
}

const toggleStatus = async()=>{

 await api.patch(`/tasks/${task.id}`,{
   status: task.status === "pending" ? "completed" : "pending"
 });

 toast.success("Status updated");
 reload();
}

return(

<div style={{
background:"#fff",
padding:"15px",
borderRadius:"10px",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
marginBottom:"10px"
}}>

<h4>{task.title}</h4>

<p style={{color:"#666"}}>{task.description}</p>

<p>
Status:
<span style={{
marginLeft:"5px",
color: task.status === "completed" ? "green" : "orange"
}}>
{task.status}
</span>
</p>

<div style={{marginTop:"10px"}}>

<button
onClick={toggleStatus}
style={{
marginRight:"10px",
background:"#10b981",
color:"#fff",
border:"none",
padding:"6px 10px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Toggle
</button>

<button
onClick={deleteTask}
style={{
background:"#ef4444",
color:"#fff",
border:"none",
padding:"6px 10px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Delete
</button>

</div>

</div>

)
}