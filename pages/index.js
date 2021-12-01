import styles from "../styles/Home.module.css";

import { Card } from "@ashkur/teste.ui.card";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>MICRO-FRONTEND HOME</h1>
      <Card
        title="SHARED CARD"
        description="Card shared with bit component"
        imageUrl="https://images.unsplash.com/photo-1633113088942-99089f4abffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
    </div>
  );
}
