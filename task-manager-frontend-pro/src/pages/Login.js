import React,{useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleLogin = async()=>{

 try{

  const res = await api.post("/auth/login",{ email,password });

  localStorage.setItem("token",res.data.accessToken);

  toast.success("Login successful");

  navigate("/dashboard");

 }catch(err){
  toast.error("Invalid email or password");
 }

}

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"#f5f7fb"
}}>

<div style={{
width:"350px",
background:"#fff",
padding:"30px",
borderRadius:"10px",
boxShadow:"0 4px 15px rgba(0,0,0,0.1)"
}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>
Task Manager Login
</h2>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"15px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"10px",
marginBottom:"15px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
onClick={handleLogin}
style={{
width:"100%",
padding:"10px",
background:"#4f46e5",
color:"#fff",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
Login
</button>

<p style={{marginTop:"15px",textAlign:"center"}}>

Don't have an account?

<Link to="/register" style={{marginLeft:"5px"}}>
Register
</Link>

</p>

</div>

</div>

)

}