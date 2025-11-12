import Background from "../../components/Background/Background";
import FPCard from "../../components/FPCard/FPCard";
import Button from "../../components/Button/Button";

import styles from './Landing.module.css';

function Landing() {
  return (
    <Background className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Untitled</h1>
        <h2 className={styles.subtitle}>BY NTIG</h2>
      </div>
      <h3 className={styles.description}>Ett enklare sätt att lära sig <FPCard innerTexts={["glosor"]} colors={["var(--pink)"]}/></h3>
      <Button innerText="Logga in" onClick={() => {}}/>
    </Background>
  );
}

export default Landing;