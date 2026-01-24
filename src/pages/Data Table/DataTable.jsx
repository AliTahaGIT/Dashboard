import React from 'react'
import './DataTable.css'

const ordersData = [
  {
    id: "ORD-1001",
    orderName: "Electronics Batch",
    shipment: "Warehouse A",
    date: "2026-01-10",
    status: "Pending",
  },
  {
    id: "ORD-1002",
    orderName: "Office Supplies",
    shipment: "Warehouse B",
    date: "2026-01-11",
    status: "In Route",
  },
  {
    id: "ORD-1003",
    orderName: "Medical Equipment",
    shipment: "Warehouse C",
    date: "2026-01-12",
    status: "Delivered",
  },
  {
    id: "ORD-1004",
    orderName: "Furniture Shipment",
    shipment: "Warehouse A",
    date: "2026-01-13",
    status: "Pending",
  },
  {
    id: "ORD-1005",
    orderName: "Retail Stock",
    shipment: "Warehouse D",
    date: "2026-01-14",
    status: "In Route",
  },
  {
    id: "ORD-1006",
    orderName: "Food Supplies",
    shipment: "Warehouse B",
    date: "2026-01-15",
    status: "Delivered",
  },
  {
    id: "ORD-1007",
    orderName: "Construction Materials",
    shipment: "Warehouse E",
    date: "2026-01-16",
    status: "Pending",
  },
  {
    id: "ORD-1008",
    orderName: "Clothing Shipment",
    shipment: "Warehouse C",
    date: "2026-01-17",
    status: "In Route",
  },
  {
    id: "ORD-1009",
    orderName: "Pharmacy Restock",
    shipment: "Warehouse A",
    date: "2026-01-18",
    status: "Delivered",
  },
  {
    id: "ORD-1010",
    orderName: "Hardware Tools",
    shipment: "Warehouse D",
    date: "2026-01-19",
    status: "Pending",
  },
];

function DataTable() {
  return (
    <div className='datatable-main'>
        <h1 className='datatable-header'>Data Table</h1>
        <div className="datatable-search">
            <input type="text" placeholder="Search orders..." className="datatable-search-input"/>
        </div>
        <div className="datatable-table-wrapper">
        <table className="datatable-table">
          <thead className="datatable-thead">
            <tr className="datatable-tr">
              <th className="datatable-th">Order ID</th>
              <th className="datatable-th">Order Name</th>
              <th className="datatable-th">Shipment</th>
              <th className="datatable-th">Date</th>
              <th className="datatable-th">Status</th>
              <th className="datatable-th">Actions</th>
            </tr>
          </thead>

          <tbody className="datatable-tbody">
            {ordersData.map((order) => (
              <tr className="datatable-tr" key={order.id}>
                <td className="datatable-td">{order.id}</td>
                <td className="datatable-td">{order.orderName}</td>
                <td className="datatable-td">{order.shipment}</td>
                <td className="datatable-td">{order.date}</td>

                <td className="datatable-td">
                    <span className={`datatable-status ${order.status === "Pending" ? "status-pending": order.status === "In Route" ? "status-route" : "status-delivered"}`}>
                        {order.status}
                    </span>
                </td>

                <td className="datatable-td">
                  <div className="datatable-actions">
                    <button className="datatable-btn-view">View</button>
                    <button className="datatable-btn-edit">Edit</button>
                    <button className="datatable-btn-delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable