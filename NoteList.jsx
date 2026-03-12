
import React,{useEffect,useState} from "react";
import axios from "axios";

function NoteList(){

 const [notes,setNotes]=useState([]);

 useEffect(()=>{
  axios.get("http://localhost:5000/api/notes")
  .then(res=>setNotes(res.data));
 },[]);

 return(
  <div>
   {notes.map(n=>(
    <div key={n._id}>
     <h3>{n.title}</h3>
     <pre>{n.code}</pre>
    </div>
   ))}
  </div>
 );
}

export default NoteList;
