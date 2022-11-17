import React, { useState } from "react";
import styles from "./productlist.module.css";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
const Productlist = () => {
  const [product, setProduct] = useState(productRows);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "User name", width: 130 },
    {
      field: "img",
      headerName: "Avatar",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className={styles.productListItem}>
              <img
                className={styles.productListImg}
                src={params.row.img}
                alt=""
              />
              {params.row.name}
            </div>
          </>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className={styles.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.productListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
      width: 180,
    },
  ];

  return (
    <div className={styles.productList}>
      <DataGrid
        rows={productRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Productlist;
