import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Widgetlg from "../../components/widgetLg/Widgetlg";
import Widgetsm from "../../components/widgetsm/Widgetsm";
import { userData } from "../../dummyData";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className={styles.homeWidgets}>
        <Widgetsm></Widgetsm>
        <Widgetlg></Widgetlg>
      </div>
    </div>
  );
};

export default Home;
