//import Card from "@/components/card/Card";
import FetchData from "@/components/FetchData/FetchData";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <FetchData />
    </div>
  );
}
