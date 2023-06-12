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
    getAllNotes().then((notes) => {
      setNotes(notes)
    });
  }, []);

  const addNote = (event) => {
    setNewNote(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      seterrorMessage('wrong credentials')
      setTimeout(() => {
        seterrorMessage(null)
      }, 5000)
    }
  }

  const handlerShowAll = () => {
    setShowAll(() => !showAll)
  };

  const LoginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button>
          Login
        </button>
      </form>
    )
  }

  const renderCreateNoteFrom = () => {
    return (
      <form onSubmit={addNote}>
        <input
          placeholder='Write your note content'
          onChange={newNote}
          value={newNote}
        />
        <button type='submit'>Crear Notas</button>
      </form>
    )
  }

  return (
    <>
      <div className="App" key={22}>
        <h1>Notes by NicoDev</h1>
        {/* <Notification message={errorMessage}> */}
        {user === null && LoginForm()}
        {user !==null && renderCreateNoteFrom()}



        <button onClick={handlerShowAll}>{showAll ? 'Show only important' : 'Show all'}</button>
      </div>
      <ol>
        {
          notes.map((note) => (
            <Note key={note.id} {...note} />
          ))
        }
      </ol>
    </>
  );
}

export default App;
