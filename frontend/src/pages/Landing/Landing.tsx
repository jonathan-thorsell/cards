import Background from "../../components/Background/Background";
import FPCard from "../../components/FPCard/FPCard";

import styles from './Landing.module.css';

function Landing() {
  return (
    <Background containerClass={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Untitled</h1>
        <h2 className={styles.subtitle}>BY NTIG</h2>
      </div>
      {/* todo make a component here */}
      <h3 className={styles.description}>Ett enklare sätt att lära sig <FPCard innerText="glosor"/></h3>
      {/* button component */}
      
    </Background>
  );
}

export default Landing;