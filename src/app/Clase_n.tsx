const Clase_n = () => {

  const my_object = [
    {nombre: "A", id:1},
    {nombre: "B", id:2},
    {nombre: "C", id:3},
  ]



  return (
    <div>
      <ul>
        {
          my_object.map(item => (<MyComponent key={item.id} name={item.nombre} />))
}
      </ul>
    </div>
  )
}
export default Clase_n

type My_local_type = {
  name: string
}

function MyComponent({name}: My_local_type) {
  return (
    <li>
      {name}
    </li>)
}