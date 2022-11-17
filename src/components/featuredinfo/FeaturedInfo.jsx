import React from "react";
import styles from "./featuredInfo.module.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
const FeaturedInfo = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featureTitle}>Revenue</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            -$11.48
            <ArrowCircleDownIcon className={styles.featuredIcon} />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featureTitle}>Sales</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            -$71.48
            <ArrowCircleDownIcon className={styles.featuredIcon} />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featureTitle}>Cost</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$2,415</span>
          <span className={styles.featuredMoneyRate}>
            $61.48
            <ArrowCircleUpIcon
              className={`${styles.featuredIcon} ${styles.negative}`}
            />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
