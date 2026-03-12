
import React from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";

function App(){
 return(
  <div>
   <h1>SmartCodeNotes</h1>
   <NoteEditor/>
   <NoteList/>
  </div>
 );
}

export default App;
