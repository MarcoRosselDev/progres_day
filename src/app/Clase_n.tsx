"use client"
import { FormEvent, useRef} from "react"

const Clase_n = () => {

  const ref_formulario = useRef(null)

  function handleSubmit(event:FormEvent) {
    event.preventDefault();

    if (!ref_formulario.current) return // pequeña validacion
    const form_data = new FormData(ref_formulario.current)
    const main_input = form_data.get("main-input")
    const color = form_data.get("color-favorito")
    const terminos = form_data.get("terminos-y-condiciones")
    console.log({main_input, color, terminos});
    
  }

  return (
    <div>
      <h1>Formulario no controlado con FormData</h1>
      <form onSubmit={handleSubmit} ref={ref_formulario}>
        <input 
        name="main-input"
        className="form-control" 
        type="text" />
        <select name="color-favorito">
          <option selected value="" disabled>Selecciona un color</option>
          <option value="rojo">rojo</option>
          <option value="azul">azul</option>
          <option value="verde">verde</option>
        </select>
        <label>
          <input type="checkbox" name="terminos-y-condiciones" />
          Acepto los terminos y condiciones
        </label>
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  )
}
export default Clase_n