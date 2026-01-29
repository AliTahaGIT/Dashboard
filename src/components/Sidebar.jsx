import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


import Avatar from '@mui/material/Avatar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";


import "./Sidebar.css";

const navbarItems = [
  { key: "sidebar.home", path: "/", Icon: HomeOutlinedIcon },
  { key: "sidebar.statistics", path: "/statistics", Icon: ShowChartOutlinedIcon },
  { key: "sidebar.datatable", path: "/datatable", Icon: TableChartOutlinedIcon },
  { key: "sidebar.charts", path: "/charts", Icon: InsertChartOutlinedIcon },
  { key: "sidebar.activity", path: "/activity", Icon: HistoryOutlinedIcon },
];





function Sidebar({isOpen}) {
  const location = useLocation();
  const activePath = location.pathname;
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <nav className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
      <div className="sidebar-top">
        <div className="nav-logo">
          <Avatar alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGslhUt-pAehYNJfQpFOm44EIh3T4UV0nCHw&s" sx={{ width: 35, height: 35 }}/>
          {isOpen ? <p className="nav-logo-name">Swedish Technology</p> : ""}
        </div>
        <span className="divider"/>
      </div>

      <ul className="sidebar-items">
        {navbarItems.map((item) => (
          <li key={item.path} className={`sidebar-item ${activePath === item.path ? "active" : ""}`} onClick={() => navigate(item.path)}>
              <item.Icon
                className="sidebar-icon"
                sx={{
                  color: activePath === item.path ? "#183A7A" : "#1F1F1F",
                  fontSize: 24,
                  transition: "color 0.2s ease",
                }}
              />
              <p className={`item-label ${activePath === item.path ? "activeText" : ""}`}>{t(item.key)}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
