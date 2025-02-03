import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Operation Specialist</h3>
              <p>
              I spearheaded the successful launch of over 50 new products for VistaPrint & Pixart in India. My role encompassed establishing and refining product standards within Cimpress, ensuring adherence to existing protocols while also integrating new ones. This initiative aimed to enhance the capacity and efficiency of Cimpress' operations. I facilitated the seamless implementation and utilization of MCP tooling, both existing and newly introduced, to further elevate our business practices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Operation Executive</h3>
              <p>
              Launched diverse categories in 13 cities, revamped vendor flow for 10x growth, managed Product lifecycle, improved customer satisfaction, introduced new SKUs, and enhanced vendor performance. Led streamlined Product Roadmap for alignment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Category Management Associate</h3>
              <p>
              Onboarded 200+ professionals, maintained market share in 8 cities, streamlined processes for AC season in 28 Tier-2 cities, and ensured exceptional customer experiences by managing relationships and service quality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
