//import Card from "@/components/card/Card";
//import FetchData from "@/components/FetchData/FetchData";
import NewDayForm from "@/components/formNewDay/NewDayForm";
import styles from "./page.module.css";
import FromReminder from "@/components/formReminder/FromReminder";

export default function Home() {

  return (
    <div className={styles.page}>
      <header>
        <p>futuro header var</p>
      </header>
      <NewDayForm />
      <FromReminder />
      {/* <FetchData /> */}
    </div>
  );
}
