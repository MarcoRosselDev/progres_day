import styles from "./newDay.module.css";

const NewDayForm = () => {
  return (
    <form className={styles.new_day_form}>
      <input type="date" 
      defaultValue={new Date().toISOString().split('T')[0]} // from deepseek  
      name="date" id="date" />
      <input type="text" />
      <button type="submit">send</button>
    </form>
  )
}
export default NewDayForm