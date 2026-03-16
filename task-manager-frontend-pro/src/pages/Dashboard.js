import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard(){

const [tasks,setTasks]=useState([]);
const [search,setSearch]=useState("");

const navigate = useNavigate();

const logout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

const loadTasks = async()=>{
 const res = await api.get("/tasks");
 setTasks(res.data);
}

useEffect(()=>{
 loadTasks();
},[]);

const filteredTasks = tasks.filter(t =>
 t.title.toLowerCase().includes(search.toLowerCase())
);

return(

<div style={{
background:"#f5f7fb",
minHeight:"100vh",
padding:"40px"
}}>

<div style={{
maxWidth:"900px",
margin:"auto"
}}>

{/* HEADER */}
<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"20px"
}}>

<h1>Task Manager</h1>

<button
onClick={logout}
style={{
background:"#ef4444",
color:"#fff",
border:"none",
padding:"8px 14px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Logout
</button>

</div>

<input
placeholder="🔍 Search task..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
padding:"10px",
borderRadius:"8px",
border:"1px solid #ddd",
marginBottom:"20px"
}}
/>

<TaskForm reload={loadTasks}/>

<TaskList tasks={filteredTasks} reload={loadTasks}/>

</div>

</div>

)
}