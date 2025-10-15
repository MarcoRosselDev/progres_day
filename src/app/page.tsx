import Card from "@/components/card/Card";
import styles from "./page.module.css";
import Test from "./test";

export default function Home() {

  const objeto_de_desarrollo = [
    {"14-10-2025": {
      h_estudio: 6.5,
      km_corridos: 13.5,
      h_trabajo: 0
    }},
    {"15-10-2025" : {
      h_estudio: 8,
      km_corridos: 0,
      h_trabajo: 0    
    }}
  ]

  

  return (
    <div className={styles.page}>
      <Test />
      <div className={styles.main}>
        {
          objeto_de_desarrollo.map((objeto) => {
            return <Card obj={objeto} />
          })
        }
      </div>
      <Test />
      <Test />
    </div>
  );
}
