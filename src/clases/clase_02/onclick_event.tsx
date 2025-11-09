"use client" // use client le dice a next que es un archivo.tsx que se utiliza en el frontend
import { FormEvent } from "react";

const Clase_n = () => {

  return (
    <div>
      <My_button_component />
    </div>
  )
}
export default Clase_n

const My_button_component = () => {
  function handleClick(event: FormEvent) {
    event.preventDefault();
    console.log("you'r clicking this button!");
  }
  return (
    <button className="btn btn-success" onClick={handleClick} >click me</button>
  )
}