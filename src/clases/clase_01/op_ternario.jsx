const Class_1 = () => {

  const user = {
    username: "Marco",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
  };

  return (
    <>
      {/* solo si el user.username = true value, entonces
    renderizara el elemento h1 */}
      {user.username && (
        <h1>Holaa {user.username}</h1>
      )}
      {/* En cambio el operador ternario si o si renderiza 
      el elemento h1 */}
      <h1>Hola {user.username ? user.username : "Anonimo"}</h1>
      <img src={user.imageUrl} alt="" sizes={user.imageSize} />
    </>
  )
}
export default Class_1