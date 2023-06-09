import './App.css';
import FormNotas from './components/FormNotas';



function App() {
  const mensaje = 'Hola Mundo desde variable'
  
  return (
    <>
      <div className="App">
        <h1>Notes by NicoDev</h1>
        {mensaje + ' evalucacion de jsx'}
        <img src='' />
      </div>
      <FormNotas />
    </>
  );
}

export default App;
