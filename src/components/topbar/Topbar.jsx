import React from "react";
import styles from "./topbar.module.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarwrapper}>
        <div className={styles.top_left}>
          <span className={styles.logo}>John Admin</span>
        </div>
        <div className={styles.top_right}>
          <div className={styles.topbarIconContainer}>
            <NotificationsActiveIcon />
            <span className={styles.notificationBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <LanguageIcon />
          </div>
          <div className={styles.topbarIconContainer}>
            <SettingsIcon />
          </div>
          <img
            src="https://media.istockphoto.com/id/1270072400/photo/smiling-schoolboy-in-the-schoolyard.jpg?s=612x612&w=0&k=20&c=sIRfaA2KHpFW3hFBVkRtGCt7PvIUx42Z94B1asRheoE="
            alt=""
            className={styles.avtar}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
