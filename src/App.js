import './App.css';
import { useEffect, useState } from 'react';
import FormNotas from './components/FormNotas';
import { Note } from './components/Note';
import axios from 'axios';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';

const mensaje = 'Hola Mundo desde variable'


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(notes)
  const [showAll, setShowAll] = useState(true)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    console.log('useEffect')
    setloading(true)
    getAllNotes().then((notes) => {
      setNotes(notes)
      setloading(false)
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('crear nota')
    const noteToAddState = {
      title: newNote,
      body: newNote,
      userId:1
    };

    createNote(noteToAddState).then((newNote) => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    });   

    setNewNote('')
  }

  const handlerShowAll = () => {
    setShowAll(() => !showAll)
  };

  // if (typeof notes === undefined || notes.length === 0) {
  //   return "No tenemos notas que mostrar";
  // }
  return (
    <>
      <div className="App" key={22}>
        <h1>Notes by NicoDev</h1>
        {mensaje + ' evalucacion de jsx'}
        <button onClick={handlerShowAll}>{showAll ? 'Show only important' : 'Show all'}</button>
        {loading ? 'Cangando...': ''}
      </div>
      <ol>
        {
          notes.map((note) => (
            <Note key={note.id} {...note} />
          ))
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newNote} />
        <button>Crear Notas</button>
      </form>
    </>
  );
}

export default App;
