import './App.css';
import { useEffect, useState } from 'react';
import FormNotas from './components/FormNotas';
import { Note } from './components/Note';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';
import noteService from './services/notes'
import loginService from './services/login'

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

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

  const handleLogin = async (event) => {
    event.preventDefault()

    try{
      const user = await loginService.login({
        username,
        password
      })
  
      setUser(user)
      setUsername('')
      setPassword('')
    }catch(e){
      seterrorMessage('wrong credentials')
      setTimeout(() => {
        seterrorMessage(null)
      }, 5000)
    }
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

        <form onSubmit={handleLogin}>
          <div>
            <input></input>
          </div>
        </form>
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
