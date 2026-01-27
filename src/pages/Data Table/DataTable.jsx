import { useState } from "react";
import "./DataTable.css";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const ordersData = [
  { id: "ORD-1001", orderName: "Electronics Batch", shipment: "Warehouse A", date: "2026-01-10", status: "Pending" },
  { id: "ORD-1002", orderName: "Office Supplies", shipment: "Warehouse B", date: "2026-01-11", status: "In Route" },
  { id: "ORD-1003", orderName: "Medical Equipment", shipment: "Warehouse C", date: "2026-01-12", status: "Delivered" },
  { id: "ORD-1004", orderName: "Furniture Shipment", shipment: "Warehouse A", date: "2026-01-13", status: "Pending" },
  { id: "ORD-1005", orderName: "Retail Stock", shipment: "Warehouse D", date: "2026-01-14", status: "In Route" },
  { id: "ORD-1006", orderName: "Food Supplies", shipment: "Warehouse B", date: "2026-01-15", status: "Delivered" },
  { id: "ORD-1007", orderName: "Construction Materials", shipment: "Warehouse E", date: "2026-01-16", status: "Pending" },
  { id: "ORD-1008", orderName: "Clothing Shipment", shipment: "Warehouse C", date: "2026-01-17", status: "In Route" },
  { id: "ORD-1009", orderName: "Pharmacy Restock", shipment: "Warehouse A", date: "2026-01-18", status: "Delivered" },
  { id: "ORD-1010", orderName: "Hardware Tools", shipment: "Warehouse D", date: "2026-01-19", status: "Pending" },
];

function DataTable() {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  return (
    <div className="datatable-main">
      <h1 className="datatable-header">Data Table</h1>

      <div className="datatable-search">
        <SearchIcon className="search-icon"/>
        <input type="text" placeholder="Search orders..." className="datatable-search-input"/>
      </div>

      <div className="datatable-table-wrapper">
        <table className="datatable-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Name</th>
              <th>Shipment</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.orderName}</td>
                <td>{order.shipment}</td>
                <td>{order.date}</td>

                <td>
                  <span
                    className={`datatable-status ${
                      order.status === "Pending"
                        ? "status-pending"
                        : order.status === "In Route"
                        ? "status-route"
                        : "status-delivered"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
                    <MoreVertIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => setAnchor(null)}>View</MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>Edit</MenuItem>
        <MenuItem onClick={() => setAnchor(null)} sx={{ color: 'var(--error);' }}> Delete </MenuItem>
      </Menu>
    </div>
  );
}

export default DataTable;
