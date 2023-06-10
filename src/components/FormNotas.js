import '../styles/formNotas.css'

const handleSubmit = (props) => {
  console.log(props.target.value)
}

const FormNotas = () => {
  return <form onSubmit={handleSubmit} className="formNotas">
    <label>Note</label>
    <input type='text'></input>
    <button>Crear nota</button>
  </form>
}
export default FormNotas
