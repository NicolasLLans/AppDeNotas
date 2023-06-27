import { useState } from 'react'
import '../styles/formNotas.css'
import Toggable from './Toggable'

export default function FormNotas({addNote,handleLogout}){

  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content : newNote,
      importante: false
    }

    addNote(noteObject)
    setNewNote('')
  }

  return(
    <Toggable buttonLabel={'New Note'}>
      <h3>Create a new note</h3>

        <form onSubmit={handleSubmit}>
          <input
            placeholder='Write your note content'
            onChange={handleChange}
            value={newNote} />
          <button type='submit'>Crear Notas</button>
        </form><div>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    </Toggable>
  )
}
