import React from "react";
import "./Greetings.css";

//modular css
import styles from "./Greetings.module.css";

function Greetings() {
  return (
    <div className={styles.greetingContainer}>
      <h2 className={styles.greetingTitle}>Hello world</h2>
      <p className={styles.greetingText}>This is my first react project</p>
      
    </div>
  );
}

export default Greetings;
