import React,{useState} from "react";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function TaskForm({reload}){

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");

const createTask = async()=>{

 try{

 await api.post("/tasks",{ title,description });

 toast.success("Task added");

 setTitle("");
 setDescription("");

 reload();

 }catch(err){
  toast.error("Error creating task");
 }

}

return(

<div style={{
background:"#fff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
marginBottom:"20px"
}}>

<h3>Add Task</h3>

<input
placeholder="Task title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginTop:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<textarea
placeholder="Task description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginTop:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
onClick={createTask}
style={{
marginTop:"10px",
background:"#4f46e5",
color:"#fff",
border:"none",
padding:"10px 15px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Add Task
</button>

</div>

)
}