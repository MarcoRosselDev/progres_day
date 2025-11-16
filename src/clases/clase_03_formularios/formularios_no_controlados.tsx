"use client"
import { FormEvent, useRef } from "react"

const Clase_n = () => {

  const input = useRef<HTMLInputElement>(null)

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
    console.log("whe're going to see te information on the form");
    console.log(input.current?.value);
  }

  return (
    <div>
      <h1>Formulario no controlado</h1>
      <form onSubmit={handleSubmit}>
        <input 
        className="form-control" 
        ref={input} 
        type="text" />
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  )
}
export default Clase_n
