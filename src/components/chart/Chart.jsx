import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
  YAxis,
} from "recharts";
import styles from "./chart.module.css";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className={styles.chart}>
      <h3 className={styles.chartTitle}>Sales Analytics</h3>

      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
