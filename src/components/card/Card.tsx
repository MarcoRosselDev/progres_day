import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1>14/10/2025</h1>
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