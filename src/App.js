import './App.css';
import { useState } from 'react';
import FormNotas from './components/FormNotas';
import { Note } from './components/Note';

const mensaje = 'Hola Mundo desde variable'


function App(props) {
  const [notes, setNotas] = useState(props.notes);
  if (typeof notes === undefined || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }
  return (
    <>
      <div className="App" key={22}>
        <h1>Notes by NicoDev</h1>
        {mensaje + ' evalucacion de jsx'}
      </div>
      <ol>
        {
          notes.map((note) => (
            <Note  
              key={note.id}
              id={note.id}
              content={note.content}
              date={note.date}
            />
          ))
        }
      </ol>
      <FormNotas />
    </>
  );
}

export default App;
