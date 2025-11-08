const Clase_n = () => {

  const user = {
    username: "Marco",
    loggin: false
  }

  // validaciones
  if (!user.loggin) {
    return <p>No esta logiado el usuario</p>
  }

  // si opasa la validacion loggin entonces retornamos el componente div
  return (
    <div>
      <p>Hola {user.username}</p>
    </div>
  )
}
export default Clase_n