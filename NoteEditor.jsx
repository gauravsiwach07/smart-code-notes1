
import React,{useState} from "react";
import axios from "axios";

function NoteEditor(){

 const [title,setTitle]=useState("");
 const [code,setCode]=useState("");

 const saveNote=async()=>{
  await axios.post("http://localhost:5000/api/notes/create",{title,code});
 };

 return(
  <div>
   <input placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
   <textarea onChange={(e)=>setCode(e.target.value)}/>
   <button onClick={saveNote}>Save</button>
  </div>
 );
}

export default NoteEditor;
