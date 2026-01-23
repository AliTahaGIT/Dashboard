import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const navbarItems = [
  {
    name: "Home",
    path: "/",
    iconUrl: "https://api.iconify.design/mdi:home-outline.svg?color=%23F7F6F2",
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconUrl: "https://api.iconify.design/mdi:chart-line.svg?color=%23F7F6F2",
  },
  {
    name: "Data Table",
    path: "/data-table",
    iconUrl: "https://api.iconify.design/mdi:table.svg?color=%23F7F6F2",
  },
  {
    name: "Charts",
    path: "/charts",
    iconUrl: "https://api.iconify.design/mdi:chart-box-outline.svg?color=%23F7F6F2",
  },
  {
    name: "Recent Activity",
    path: "/recent-activity",
    iconUrl: "https://api.iconify.design/mdi:history.svg?color=%23F7F6F2",
  },
  {
    name: "Quick Actions",
    path: "/quick-actions",
    iconUrl: "https://api.iconify.design/mdi:lightning-bolt-outline.svg?color=%23F7F6F2",
  },
];




function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
      <div
        className="sidebar-top"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? "X" : "☰"}
      </div>

      <ul className="sidebar-items">
        {navbarItems.map((item) => (
          <li key={item.path} className="sidebar-item">
              <img src={item.iconUrl} alt={item.name} className="item-img"/>
              <p className="item-label">{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
