import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";


import './MobileBottomNav.css'



const navbarItems = [
  { key: "sidebar.home", path: "/", Icon: HomeOutlinedIcon },
  { key: "sidebar.statistics", path: "/statistics", Icon: ShowChartOutlinedIcon },
  { key: "sidebar.datatable", path: "/datatable", Icon: TableChartOutlinedIcon },
  { key: "sidebar.charts", path: "/charts", Icon: InsertChartOutlinedIcon },
  { key: "sidebar.activity", path: "/activity", Icon: HistoryOutlinedIcon },
];

function MobileBottomNav() {
    const location = useLocation();
    const activePath = location.pathname;
    const navigate = useNavigate();
    const { t } = useTranslation();


    
  return (
    <div className='mobilenav-main'>
        {navbarItems.map((item) => (
            <li key={item.name} className={`mobilenav-list ${activePath === item.path ? "" : "NonActive"}`} onClick={() => navigate(item.path)}>
                <item.Icon
                  className="mobilenav-icon"
                  sx={{
                    fontSize: 28,
                    color: activePath === item.path ? "#183A7A" : "#1F1F1F",
                    transition: "color 0.2s ease",
                  }}
                />
                <span className={`mobilenav-name ${activePath === item.path ? 'activeText' : ''}`}>{t(item.key)}</span>
            </li>
        ))}
    </div>
  )
}

export default MobileBottomNav