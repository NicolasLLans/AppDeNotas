import '../styles/formNotas.css'

export default function FormNotas({handleSubmit,handleLogout}){

  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  return(
    <>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Write your note content'
            onChange={handleChange}
            value={newNote} />
          <button type='submit'>Crear Notas</button>
        </form><div>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </>
  )
}
