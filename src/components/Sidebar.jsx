import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";

const navbarItems = [
  {
    name: "Home",
    path: "/",
    iconUrl: "https://api.iconify.design/mdi:home-outline.svg?color=%231F1F1F",
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconUrl: "https://api.iconify.design/mdi:chart-line.svg?color=%231F1F1F",
  },
  {
    name: "Data Table",
    path: "/datatable",
    iconUrl: "https://api.iconify.design/mdi:table.svg?color=%231F1F1F",
  },
  {
    name: "Charts",
    path: "/charts",
    iconUrl: "https://api.iconify.design/mdi:chart-box-outline.svg?color=%231F1F1F",
  },
  {
    name: "Recent Activity",
    path: "/activity",
    iconUrl: "https://api.iconify.design/mdi:history.svg?color=%231F1F1F",
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
          <Avatar alt="Logo" src="https://imgs.search.brave.com/v93cWjhaSlTSUmaHnibH54EXUPveHF_BrSizq3ou_WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVtaWEub3JnL2Nv/bnRlbmlkby9zdWJp/ZGFzLzIwMjIvMTEv/dGlwb2dyYWZpYS15/LXBhbGV0YS1kZS1j/b2xvci0xMDI0eDU3/Ni5wbmc" sx={{ width: 35, height: 35 }}/>
          {isOpen ? <p className="nav-logo-name">Amazon</p> : ""}
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
