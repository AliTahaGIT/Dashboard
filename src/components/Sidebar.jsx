import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";

const navbarItems = [
  {
    name: "Home",
    path: "/",
    iconUrl: "https://api.iconify.design/mdi:home-outline.svg?color=%23000000",
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconUrl: "https://api.iconify.design/mdi:chart-line.svg?color=%23000000",
  },
  {
    name: "Data Table",
    path: "/datatable",
    iconUrl: "https://api.iconify.design/mdi:table.svg?color=%23000000",
  },
  {
    name: "Charts",
    path: "/charts",
    iconUrl: "https://api.iconify.design/mdi:chart-box-outline.svg?color=%23000000",
  },
  {
    name: "Recent Activity",
    path: "/activity",
    iconUrl: "https://api.iconify.design/mdi:history.svg?color=%23000000",
  },
];




function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
      <div className="sidebar-top" onClick={() => setIsOpen((v) => !v)} >
        <div className="nav-logo">
          <Avatar alt="Logo" src="https://substackcdn.com/image/fetch/$s_!HjPJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbbb6e41d-83a8-4c23-9e33-8dfb96907236_1200x1200.jpeg" sx={{ width: 35, height: 35 }}/>
          {isOpen ? <p className="nav-logo-name">Ford Automotive</p> : ""}
        </div>
        {isOpen ? "X" : "☰"}
      </div>

      <ul className="sidebar-items">
        {navbarItems.map((item) => (
          <li key={item.path} className={`sidebar-item ${activePath === item.path ? "active" : ""}`} onClick={() => navigate(item.path)}>
              <img src={item.iconUrl} alt={item.name} className="item-img"/>
              <p className="item-label">{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
