"use client" // use client le dice a next que es un archivo.tsx que se utiliza en el frontend
import { FormEvent, useState } from "react";

const Clase_n = () => {

  const [count, setCount] = useState<number>(0)

  // enviar una funcion como argumento de un componente nos evita enviar un setState function
  // que es mas complejo y problematico, por ahora no se cuales son las ventajas de complejisar
  // asi es que esta es la manera mas simple
  function handleCount() {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <My_button_component handleCount={handleCount} />
      <p>count : {count}</p>
    </div>
  )
}
export default Clase_n

type MyLocalProp = {
  handleCount : () => void;
}

const My_button_component = ( {handleCount} : MyLocalProp) => {
  function handleClick(event: FormEvent) {
    event.preventDefault();
    console.log("you'r clicking this button!");
    handleCount()
  }
  return (
    <button className="btn btn-success" onClick={handleClick} >click me</button>
  )
}