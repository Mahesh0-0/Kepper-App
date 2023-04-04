// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from './notes';
import CreateNote from './CreateNote';
import { useState } from 'react';

// function createNote(noteData){
//   return <Note key={noteData.key} title={noteData.title} content={noteData.content}/>
// }

function App() {

  const [notes,setNotes]=useState([]);
  function addNote(newNote) {
        setNotes(prevNotes=>{
          return [...prevNotes,newNote];
        })  

  }

  function deleteNote(id){
    setNotes(prevNote=>{
      return prevNote.filter((noteItem,index)=>{
        return index!==id;
      });
    }) ;
  }

  return (
    <div>
      <Header/>
      <CreateNote onAdd={addNote}/>
      {/* displaying item using map function */}
      {notes.map((noteItem,index)=>{
        return <Note 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
        />
      })}
      <Footer/> 
    </div>
  );
}

export default App;
