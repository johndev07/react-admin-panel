import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  WorkOutline,
} from "@mui/icons-material";
import Timeline from "@mui/icons-material/Timeline";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <Link to="/">
              <li className={styles.active}>
                <LineStyleIcon />
                Home
              </li>
            </Link>
            <li>
              <TimelineIcon />
              Analytics
            </li>
            <li>
              <TrendingUpIcon />
              Sales
            </li>
            <li>
              <LineStyleIcon />
              Home
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
            <Link to="/userlist">
              <li>
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to="/productlist">
              <li>
                <Storefront />
                Products
              </li>
            </Link>
            <li>
              <AttachMoney />
              Transactions
            </li>
            <li>
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Staff</h3>
          <ul className={styles.sidebarList}>
            <li>
              <WorkOutline />
              Manage
            </li>
            <li>
              <Timeline />
              Analytics
            </li>
            <li>
              <Report />
              Reports
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Notifications</h3>
          <ul className={styles.sidebarList}>
            <li>
              <MailOutline />
              Mail
            </li>
            <li>
              <DynamicFeed />
              Feedback
            </li>
            <li>
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
