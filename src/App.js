import './App.css';
import { useEffect, useState } from 'react';
import FormNotas from './components/FormNotas';
import LoginForm from './components/LoginForm';
import { Note } from './components/Note';
import noteService from './services/notes'
import loginService from './services/login'
import Notification from './components/Notification';


function App() {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, []);


  const handleLogout = () => {
    setUser(null)
    noteService.setToken(user.token)
    window.localStorage.removeItem('loggedNoteAppUser')
  }

  const addNote = (noteObject) => {
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )
      noteService.setToken(user.token)

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

  const toggleImportanceOf = () => {
    setShowAll(() => !showAll)
  };

  

  return (
    <>
      <div className="App" key={22}>
        <h1>Notes by NicoDev</h1>
        <Notification message={errorMessage}/>
        {
          user 
          ? <FormNotas
            addNote={addNote}
            handleLogout={handleLogout}
           /> 
          : <LoginForm
          username={username}
          password={password}
          handlerUsernameChange={({ target }) => setUsername(target.value)}
          handlerPasswordChange={({ target }) => setPassword(target.value)}
          handlerSubmit={handleLogin} />
        }
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ol>
        {notes.map((note, i) => (
          <Note 
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
           />
        ))}
      </ol>
    </>
  );
}

export default App;
