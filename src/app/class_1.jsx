const Class_1 = () => {

  const user = {
    username: "Marco",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
  };

  return (
    <>
      {user.username && (
        <h1>Holaa {user.username}</h1>
      )}
      <h1>Hola {user.username ? user.username : "Anonimo"}</h1>
      <img src={user.imageUrl} alt="" sizes={user.imageSize} />
    </>
  )
}
export default Class_1