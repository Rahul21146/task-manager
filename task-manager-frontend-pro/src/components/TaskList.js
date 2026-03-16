import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({tasks,reload}){

if(tasks.length===0){
 return <p>No tasks found</p>
}

return(

<div>

<h3 style={{marginBottom:"10px"}}>Your Tasks</h3>

{tasks.map(task=>(
 <TaskCard key={task.id} task={task} reload={reload}/>
))}

</div>

)
}