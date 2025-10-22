import sql, { data } from "@/sql/db/db"

const FetchData = async () => {

  console.log(sql, data);
  
  //const data = await sql`SELECT * FROM day`

  //const els = data.map(item => (<p key={item.id}>{item.fecha}</p>))

  return (
    <div>
      <p>Hi</p>
    </div>
  )
}
export default FetchData