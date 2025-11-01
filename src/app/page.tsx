//import Card from "@/components/card/Card";
//import FetchData from "@/components/FetchData/FetchData";
//import FromReminder from "@/components/formReminder/FromReminder";
import NewDayForm from "@/components/formNewDay/NewDayForm";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <header>
        <p>futuro header var</p>
      </header>
      <NewDayForm />

      {/* <FromReminder /> */}
      {/* <FetchData /> */}
    </div>
  );
}
