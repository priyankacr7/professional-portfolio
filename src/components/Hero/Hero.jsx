import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alankrat</h1>

        <div className={styles.badge}> 
          <div className={styles.badgeIcon}></div>
          <span className={styles.badgeText}>Top Product Development Voice</span>
        </div> <br /><br />

        <p className={styles.description}>
          Experienced professional with 4 years in Product Management, Strategy, and Leadership. Proven success in driving Business Growth, category management, and customer-centric solutions!
        </p>
        <a href="mailto:alankratnigamalankrat@gmail.com" className={styles.contactBtn}>
          Contact me for collaborations
        </a>
      </div>
      <img
        src={getImageUrl("hero/alankrat.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};