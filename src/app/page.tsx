import Card from "@/components/card/Card";
import styles from "./page.module.css";
import Test from "./test";

export default function Home() {
  return (
    <div className={styles.page}>
      <Test />
      <div className={styles.main}>
        <Card />
        <Card />        
        <Card />        
        <Card />        
        <Card />        
      </div>
      <Test />
      <Test />
    </div>
  );
}
