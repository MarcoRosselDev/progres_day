import styles from "./card.module.css";

const Card = ({obj}) => {
  console.log(obj, "from card component");
  
  return (
    <div className={styles.card}>
      <h1>{obj[0]}</h1>
      <div className={styles.card_container}>
        <div className={styles.card_section}>
          <p>Horas de estudio</p>
          <p>7</p>
        </div>
        <div className={styles.card_section}>
          <p>Horas de estudio</p>
          <p>7</p>
        </div>
        <div className={styles.card_section}>
          <p>Horas de estudio</p>
          <p>7</p>
        </div>
      </div>
    </div>
  )
}
export default Card