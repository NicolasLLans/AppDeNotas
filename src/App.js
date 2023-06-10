import './App.css';
import FormNotas from './components/FormNotas';
import { Note } from './components/Note';

const mensaje = 'Hola Mundo desde variable'
const notes = [
  {
    id: 1,
    content: "nota uno",
    date: Date(),
    important: false
  },
  {
    id: 2,
    content: "nota dos",
    date: Date(),
    important: true
  },
  {
    id: 3,
    content: "nota tres",
    date: Date(),
    important: false
  }
]


function App() {
  if (typeof notes === undefined || notes.length === 0) {
    return "No tenemos notas que mostrar";
  }
  return (
    <>
      <div className="App" key={22}>
        <h1>Notes by NicoDev</h1>
        {mensaje + ' evalucacion de jsx'}
      </div>
      <FormNotas />
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
    </>
  );
}

export default App;
