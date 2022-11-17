import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import styles from "./product.module.css";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";
const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productTitleContainer}>
        <h1 className={styles.productTitle}>Product</h1>
        <Link to="/newproduct">
          <button className={styles.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={styles.productTop}>
        <div className={styles.productTopLeft}>
          <Chart data={productData} dataKey="sales" title="sales performance" />
        </div>
        <div className={styles.productTopRight}>
          <div className={styles.productInfoTop}>
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.productInfoImg}
            />
            <span className={styles.productName}>Apple Airpods</span>
          </div>
          <div className={styles.productInfoBottom}>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>id:</span>
              <span className={styles.productInfoValue}>123</span>
            </div>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>sales:</span>
              <span className={styles.productInfoValue}>5123</span>
            </div>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>active:</span>
              <span className={styles.productInfoValue}>yes</span>
            </div>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>in stock:</span>
              <span className={styles.productInfoValue}>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productBottom}>
        <form className={styles.productForm}>
          <div className={styles.productFormLeft}>
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className={styles.productFormRight}>
            <div className={styles.productUpload}>
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className={styles.productUploadImg}
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className={styles.productButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
