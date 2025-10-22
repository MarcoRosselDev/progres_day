import sql from "@/sql/db"
import styles from "./fechData.module.css";

const FetchData = async () => {

  async function data() {
    try {
      const d = await sql`select * from day;`
      return d      
    } catch (error) {
      console.log(error);
    }
  }

  const obj = await data()


  return (
    <div>
      {
        obj?.map(item => {
          return (
            <div key={item.id} className={styles.main_div}>
              <p>fecha: {item.fecha.toString()}</p>
              <p>horas de estudio: {item.h_study}</p>
              <p>horas trabajadas: {item.h_work}</p>
              <p>kilometros corridos: {item.km_run}</p>
            </div>
          )
        })
      }
    </div>
  )
}
export default FetchData