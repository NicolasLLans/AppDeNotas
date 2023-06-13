export const Note = ({ note, toggleImportance }) => {
  const label = note.importante ? 'make note important' : 'make important'
  return (
  <li className='note'>
    {note.content}
    <button onClick={toggleImportance}>{label}</button>
  </li>
  )
}